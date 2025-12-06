export default function Footer() {
  return (
    <footer
      className="
        mt-12 py-6 
        border-t border-gray-200 dark:border-neutral-800
        text-center 
        text-gray-600 dark:text-gray-400
        transition-all duration-300
      "
    >
      <p className="text-sm">
        © {new Date().getFullYear()} Comment System – Built with
      </p>
    </footer>
  );
}
