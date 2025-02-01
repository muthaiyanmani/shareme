"use client"
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';

// Slate color palette
const slateColors = {
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
};

const CircleDragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setIsDragging(false);
    setUploadedFiles(acceptedFiles);
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
  });

  return (
    <div className="flex justify-center rounded-full items-center h-full flex-col">
    <motion.div
      {...getRootProps()}
      className="w-48 h-48 rounded-full border-2 border-dashed border-slate-500 flex justify-center items-center cursor-pointer bg-slate-200 relative overflow-hidden"
      animate={{
        scale: isDragging ? 1.1 : 1,
        borderWidth: isDragging ? '4px' : '2px',
      }}
      transition={{ duration: 0.3 }}
    >
      <input {...getInputProps()} />
      {isDragging ? (
        <p className="text-slate-800 font-medium">Drop the files here...</p>
      ) : (
        <p className="text-slate-700 font-medium">Drag & drop files here</p>
      )}

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
      <h4 className="text-slate-800">Uploaded Files:</h4>
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

export default CircleDragAndDrop;