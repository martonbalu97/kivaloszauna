/** Lightweight client-side error reporting without a Lovable runtime dependency. */
export function reportClientError(
  error: unknown,
  context: Record<string, unknown> = {},
) {
  console.error("Application error", { error, ...context });
}
