'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CryptoAddress = () => {
  const [copied, setCopied] = useState(false);
  const address = "7uB2k4nMA28egNmVpZRNm98Xt6QpqSMNXfrWGiHEpump"; // Replace with your actual crypto address

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="flex items-center gap-2 rounded-lg bg-black/90 p-3 shadow-lg backdrop-blur-sm border border-gray-700">
        <div className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap text-base font-mono text-white">
          {address}
        </div>
        <button
          onClick={copyToClipboard}
          className="rounded-full p-1.5 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          title="Copy address"
        >
          {copied ? (
            <Check className="size-5 text-green-400" />
          ) : (
            <Copy className="size-5 text-gray-300" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CryptoAddress;