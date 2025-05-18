/**
 * A utility function to conditionally join class names together
 * This implementation doesn't rely on the external clsx package
 */
export function cn(...inputs: (string | boolean | undefined | null)[]): string {
  return inputs.filter(Boolean).join(" ").trim()
}
