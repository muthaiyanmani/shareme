"use client"
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'
import { Check, CircleX, Copy, Link, Upload } from 'lucide-react';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { AlertDialogDescription } from '@radix-ui/react-alert-dialog';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Progress } from './ui/progress';


export default function UploadFile() {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);
  const [shareLink, setShareLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const router = useRouter()

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset copied state after 2 seconds
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
    <div className="flex justify-center rounded-full items-center h-full flex-col">
      <motion.div
        {...getRootProps()}
        className={`w-48 h-48 rounded-full border-2 border-dashed border-slate-500 flex justify-center items-center cursor-pointer bg-slate-200 relative overflow-hidden ${isUploading ? 'pointer-events-none opacity-50' : ''}`}
        animate={{
          scale: isDragging ? 1.1 : 1,
          borderWidth: isDragging ? '4px' : '2px',
        }}
        transition={{ duration: 0.3 }}
      >
        <input disabled={openDialog} type='file' {...getInputProps()} />
        {
          isUploading ? (
            <div className="absolute w-full h-full bg-slate-200 bg-opacity-70 flex justify-center items-center flex-col gap-4">
              <div className='flex'>
                <Upload />
                <p className="text-slate-800 ml-2 font-medium">Uploading</p>
              </div>
              <div className='w-full px-4 lg:px-8 flex items-center gap-2'>
                <Progress value={progress} />
                <p className="text-slate-800 ml-2 font-medium">{progress}%</p>
              </div>
            </div>
          ) : isDragging ? (
            <p className="text-slate-800 font-medium">Drop the files here...</p>
          ) : (
            <p className="text-slate-700 font-medium">Drag & drop files here</p>
          )
        }

        <AlertDialog open={openDialog} >
          <AlertDialogContent>
            <AlertDialogHeader>
              <div className='flex items-center justify-between'>
              <AlertDialogTitle>Share the link</AlertDialogTitle>
              <CircleX onClick={closeModal} className='cursor-pointer'/>
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

        {/* Expanding Rings Animation */}
        {isDragging && (
          <>
            <motion.div
              className="absolute w-full h-full rounded-full border-2 border-slate-500"
              animate={{
                scale: 2,
                opacity: 0,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute w-full h-full rounded-full border-2 border-slate-500"
              animate={{
                scale: 3,
                opacity: 0,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute w-full h-full rounded-full border-2 border-slate-500"
              animate={{
                scale: 4,
                opacity: 0,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
          </>
        )}
      </motion.div>

      {!!uploadedFiles.length &&
        <div className="mt-5 text-center">
          <h4 className="text-slate-800">Uploaded File:</h4>
          <ul className="list-none p-0">
            {uploadedFiles.map((file, index) => (
              <li key={index} className="text-slate-700">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
};
