/** FormData.get отдаёт string | File | null — в текстовых полях всегда строка. */
export const getFormString = (data: FormData, name: string): string => {
  const value = data.get(name)

  return typeof value === 'string' ? value : ''
}
