export default function getAge(DoB) {
  let diff = Date.now() - new Date(DoB).getTime()
  return Math.abs(new Date(diff).getFullYear() - 1970)
}