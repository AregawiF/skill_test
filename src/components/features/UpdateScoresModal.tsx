import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaHtml5, FaArrowRight } from 'react-icons/fa';

interface ScoreFormData {
  rank: string;
  percentile: string;
  score: string;
}

interface UpdateScoresModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: ScoreFormData) => void;
  initialData: ScoreFormData;
}

const UpdateScoresModal: React.FC<UpdateScoresModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}) => {
  const [formData, setFormData] = useState<ScoreFormData>(initialData);
  const [errors, setErrors] = useState<{ rank?:string, percentile?:string, score?:string}>({});

  useEffect(() => {
    if (isOpen) {
      setFormData(initialData);
      setErrors({});
    }
  }, [isOpen, initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'rank') {
      if (!value) {
        setErrors((prev) => ({ ...prev, rank: 'Rank is required' }));
      } else if (!/^\d+$/.test(value)) {
        setErrors((prev) => ({ ...prev, rank: 'Rank should be a number' }));
      } else {
        setErrors((prev) => ({ ...prev, rank: undefined }));
      }
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { rank?: string } = {};
    let isValid = true;

    if (!formData.rank) {
      newErrors.rank = 'Rank is required';
      isValid = false;
    } else if (!/^\d+$/.test(formData.rank)) {
      newErrors.rank = 'Rank should be a number';
      isValid = false;
    } 

    if (!formData.percentile) {
      newErrors.percentile = 'Percentile is required';
      isValid = false;
    } else if (!/^\d+$/.test(formData.percentile)) {
      newErrors.percentile = 'Percentile should be a number';
      isValid = false;
    }
    if (!formData.score) {
      newErrors.score = 'Score is required';  
      isValid = false;
    } else if (!/^\d+$/.test(formData.score)) {
      newErrors.score = 'Score should be a number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(formData);
    }
  };

  const StepItem = ({ number, text }: { number: number; text: string }) => (
    <div className="flex items-center gap-3">
      <span className="flex items-center justify-center w-6 h-6 bg-blue-900 text-white rounded-full text-sm font-bold">
        {number}
      </span>
      <span className="font-semibold text-gray-700">{text}</span>
    </div>
  );

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-start mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-gray-900"
                  >
                    Update scores
                  </Dialog.Title>
                  <FaHtml5 className="text-orange-500 text-3xl" />
                </div>


                <div className="mt-4 space-y-5">
                  <div className="grid grid-cols-2 gap-4 items-start">
                    <StepItem number={1} text="Update your Rank" />
                    <div>
                      <input
                        type="text"
                        name="rank"
                        value={formData.rank}
                        onChange={handleChange}
                        placeholder="Rank"
                        className={`w-full border rounded px-3 py-2 text-sm ${errors.rank ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500`}
                        aria-invalid={!!errors.rank}
                        aria-describedby={errors.rank ? "rank-error" : undefined}
                      />
                      {errors.rank && (
                        <p id="rank-error" className="text-xs text-red-500 mt-1">
                          {errors.rank}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 items-start">
                    <StepItem number={2} text="Update your Percentile" />
                    <div>
                      <input
                        type="number"
                        name="percentile"
                        value={formData.percentile}
                        onChange={handleChange}
                        placeholder="Percentile"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.percentile && (
                        <p id="rank-error" className="text-xs text-red-500 mt-1">
                          {errors.percentile}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 items-start">
                    <StepItem number={3} text="Update your Current Score (out of 15)" />
                    <div>
                      <input
                        type="number"
                        name="score"
                        value={formData.score}
                        onChange={handleChange}
                        placeholder="Score"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.score && (
                        <p id="rank-error" className="text-xs text-red-500 mt-1">
                          {errors.score}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-1 rounded-md border border-blue-900 bg-white px-8 py-4 text-sm font-bold text-blue-950 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-1 rounded-md border border-transparent bg-blue-900 px-8 py-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handleSave}
                  >
                    Save <FaArrowRight size={12} />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdateScoresModal;