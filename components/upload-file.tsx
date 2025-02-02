"use client"
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, CircleX, Copy, Folder } from 'lucide-react';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { AlertDialogDescription } from '@radix-ui/react-alert-dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Progress } from './ui/progress';
import { formatFileSize } from '@/lib/format-size';


export default function UploadFile() {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);
  const [shareLink, setShareLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareLink)
      setCopied(true)
      setTimeout(() => {
        setCopied(false);
        // setOpenDialog(false)
      }, 2000) // Reset copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setIsDragging(false);
    setUploadedFiles(acceptedFiles);

    const fileName = acceptedFiles[0]?.name;
    const contentType = acceptedFiles[0]?.type;
    const response = await fetch(`/api/v1/file/signed-url?file=${fileName}`, { method: "POST" });
    const data = await response.json();

    const { signed_url: signedUrl, key } = data?.data;

    setIsUploading(true);

    const xhr = new XMLHttpRequest();
    xhr.open("PUT", signedUrl, true);
    xhr.setRequestHeader("Content-Type", contentType);

    // Track progress
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentCompleted = Math.round((event.loaded / event.total) * 100);
        setProgress(percentCompleted);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        setIsUploading(false);
        setShareLink(`${window.location.origin}/file/${key}`);
        setOpenDialog(true);
      } else {
        alert("Upload failed!");
      }
    };

    xhr.onerror = () => alert("An error occurred during the upload.");

    xhr.send(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
  });

  const closeModal = () => {
    setOpenDialog(false)
    setUploadedFiles([])
    setProgress(0)
    setShareLink('')
  }

  return (
    <div className=" w-full flex flex-col items-center justify-center p-4">

      <div
        {...getRootProps()}
        className="relative w-full max-w-lg aspect-square flex flex-col items-center justify-center cursor-pointer"
      >
        <input disabled={openDialog} {...getInputProps()} />

        {/* Animated circles background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-full h-full rounded-full bg-gradient-to-br from-blue-800/30 via-blue-700/20 to-blue-600/10"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute w-3/4 h-3/4 rounded-full bg-gradient-to-tl from-blue-800/30 via-blue-700/20 to-blue-600/10"
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>

        {/* Dotted circle and content */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative">

            <svg className="w-32 h-32 text-blue-600" viewBox="0 0 100 100">
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="1"
                strokeDasharray="4 4"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="origin-center"
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <Folder className="w-8 h-8 text-blue-300" />
            </div>
          </div>

          <div className="mt-6 text-center">
            {isUploading ? (
              <div className='text-white text-center'>

                {!!uploadedFiles.length &&
                  <div className="mt-5 text-center">
                    <ul className="list-none p-0">
                      {uploadedFiles.map((file, index) => (
                        <li key={index} className="flex items-center gap-1 overflow-hidden">
                         <span className="truncate block w-24 md:w-40">{file.name}</span>
                         <span className="text-xs text-gray-400">({formatFileSize(file.size)})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                }
                <p className='my-2'>Uploading {progress}% </p>
                <Progress value={progress} className='bg-white' />
              </div>) : <><p className="text-blue-50 text-md mb-2">Drag and drop your files here.</p>
              <p className="text-blue-300">
                Or,{" "}
                <button className="text-blue-400 hover:text-blue-300 hover:underline focus:outline-none transition-colors">
                  browse to upload.
                </button>
              </p>
            </>
            }
          </div>
        </div>


        {/* Drag overlay */}
        <AnimatePresence>
          {isDragging && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-blue-400/10 rounded-full z-20"
            />
          )}
        </AnimatePresence>


        <AlertDialog open={openDialog} >
          <AlertDialogContent>
            <AlertDialogHeader>
              <div className='flex items-center justify-between'>
                <AlertDialogTitle>Share the link</AlertDialogTitle>
                <CircleX onClick={closeModal} className='cursor-pointer' />
              </div>
             
              <AlertDialogDescription>
                <p className='text-sm'>Copy the link below and share it with your friends</p>
                <br />
               
                <div className="flex items-center space-x-2 mt-2">
                <Input type="text" value={shareLink} className="flex-grow" disabled />
                  <Button
                    onClick={copyToClipboard}
                    variant={"default"}
                    disabled={copied}
                    className={cn("transition-colors", "bg-primary")}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>

          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};
