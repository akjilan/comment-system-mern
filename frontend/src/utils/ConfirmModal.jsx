import { motion, AnimatePresence } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";

export default function ConfirmModal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-50 
            bg-black/50 backdrop-blur-sm 
            flex items-center justify-center
          "
        >
          {/* Modal Box */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              bg-white dark:bg-neutral-900 
              rounded-2xl shadow-xl 
              w-full max-w-md p-6 
              border border-gray-200 dark:border-neutral-700
            "
          >
            {/* Icon */}
            <div className="flex justify-center mb-3">
              <FaExclamationTriangle className="text-red-500 text-4xl" />
            </div>

            <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-100">
              Delete Comment?
            </h2>

            <p className="text-center text-gray-600 dark:text-gray-400 mt-2 mb-6">
              This action cannot be undone.
            </p>

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <button
                onClick={onClose}
                className="
                  px-5 py-2 
                  rounded-xl 
                  bg-gray-200 dark:bg-neutral-700 
                  dark:text-gray-200
                  hover:bg-gray-300 dark:hover:bg-neutral-600
                  transition-all duration-300
                "
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
                className="
                  px-5 py-2 rounded-xl 
                  bg-red-600 text-white 
                  hover:bg-red-700 
                  transition-all duration-300
                "
              >
                Delete
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
