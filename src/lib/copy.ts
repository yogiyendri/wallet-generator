export function copyText(entryText: string) {
  navigator.clipboard.writeText(entryText);
  return console.log("copied");
}
