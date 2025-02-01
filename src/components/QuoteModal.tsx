'use client';

import {
  Dialog,
  Transition,
  DialogTitle,
  DialogPanel,
  TransitionChild,
  Button,
} from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { formFields } from '@/constants';
import Image from 'next/image';
import { sendQuoteRequest } from '@/lib/actions/sendEmail';

export type QuoteFormData = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  commodityType: string;
  pickupLocation: string;
  deliveryLocation: string;
  transportDetails: string;
};

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>();

  const onSubmit = async (data: QuoteFormData) => {
    try {
      const result = await sendQuoteRequest(data);
      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        console.error('Failed to send quote request');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            onClick={() => setIsSuccess(false)}
            className="fixed bottom-0 left-0 right-0 top-[65px] bg-black/30 backdrop-blur-sm"
          />
        </TransitionChild>

        <div className="fixed bottom-0 left-0 right-0 top-[65px] overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-5 text-left align-middle shadow-xl transition-all md:max-w-2xl">
                <div className="flex w-full flex-col-reverse items-center justify-between border-b border-[#E3E9FF] pb-5 md:flex-row md:border-none">
                  <div className="flex w-full items-center justify-start gap-2">
                    <Image src="/assets/quote-modal-icon.png" alt="logo" width={58} height={58} />
                    <div>
                      <DialogTitle className="text-lg font-semibold text-[#101828]">
                        Request a Quote
                      </DialogTitle>
                      <p className="text-sm text-[#475467]">Expect Our Response Within 48 Hours</p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="ml-auto rounded-lg bg-[#FFE0DB] p-2 hover:cursor-pointer hover:bg-[#FFE0DB]/40 md:bg-white md:hover:bg-white"
                  >
                    <X className="h-5 w-5 text-gray-900" />
                  </button>
                </div>
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center gap-5 pt-5 text-center">
                    <div className="relative h-[64px] w-[64px] md:h-[110px] md:w-[110px]">
                      <Image src="/assets/success-modal-icon.png" alt="" width={110} height={110} />
                    </div>
                    <h3 className="text-xl font-bold text-[#101828]">Quote Request Submitted!</h3>

                    <p className="text-sm text-[#475467] md:w-[500px] md:text-base">
                      We&apos;ll be in touch within 48 hours with your personalized quote, sent to
                      the email or phone number you provided.
                    </p>
                    <Button
                      onClick={() => {
                        onClose();
                        setIsSuccess(false);
                      }}
                      className="w-full rounded-lg bg-primary py-3 text-white hover:bg-[#991818]"
                    >
                      Got It, Thanks!
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-5">
                    {formFields.map((row, rowIndex) => (
                      <div key={rowIndex} className="space-y-4 md:flex md:gap-5 md:space-y-0">
                        {row.map((field) => (
                          <div key={field.name} className="w-full">
                            <label
                              htmlFor={field.name}
                              className="mb-2 block text-sm text-[#344054] md:text-base"
                            >
                              {field.label}
                            </label>
                            <input
                              {...register(field.name, {
                                required: field.required,
                                ...(field.pattern && { pattern: field.pattern }),
                              })}
                              type={field.type}
                              className="w-full rounded-lg border border-gray-300 p-3 text-[#101828] caret-primary placeholder:text-gray-500 focus:border-primary focus:shadow-[0px_0px_0px_3px_rgba(167,43,42,0.10)] focus:outline-none focus:ring-1 focus:ring-primary"
                              placeholder={field.placeholder}
                            />
                            {errors[field.name] && (
                              <p className="mt-1 text-sm text-red-600">
                                {errors[field.name]?.message}
                              </p>
                            )}

                            {field.note && (
                              <p className="mt-1 text-sm text-[#DC6803]">{field.note}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}

                    <div>
                      <label
                        htmlFor="transportDetails"
                        className="mb-2 block text-sm text-[#344054] md:text-base"
                      >
                        Transport Details
                      </label>
                      <textarea
                        {...register('transportDetails')}
                        className="h-24 w-full rounded-lg border border-gray-300 p-3 text-[#101828] caret-primary placeholder:text-gray-500 focus:border-primary focus:shadow-[0px_0px_0px_3px_rgba(167,43,42,0.10)] focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Provide any specific transport requirements or instructions"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-lg bg-primary py-3 text-white hover:bg-[#991818]"
                    >
                      Get a quote
                    </Button>
                  </form>
                )}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
