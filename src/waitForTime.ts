export default function waitForTime(ms: number): Promise<{}> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
