import { format } from 'date-fns'

export function formatDate(value) {
  return format(new Date(value), 'dd/MM/yyyy')
}
