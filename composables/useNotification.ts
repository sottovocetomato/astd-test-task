type NotificationVariant = 'primary' | 'danger'

export const useNotification = () => {
  const show = useState('show-notification', () => false)
  const variant = useState<NotificationVariant>(
    'notif-variant',
    () => 'primary',
  )

  function showNotification(notifVariant: NotificationVariant) {
    if (show.value) return
    if (!notifVariant && variant.value !== 'primary') {
      variant.value = 'primary'
    }
    else {
      variant.value = notifVariant
    }
    show.value = true

    setTimeout(() => (show.value = false), 1800)
  }
  return { show, showNotification, variant }
}
