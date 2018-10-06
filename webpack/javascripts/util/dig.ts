export default function dig(path: string, obj: any): any {
  return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
}
