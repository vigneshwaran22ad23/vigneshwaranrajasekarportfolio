import { useState } from 'react'

export default function ImageWithFallback({
  src,
  alt = '',
  icon,
  className = '',
  fallbackClassName = '',
  fallbackStyle = {},
  children,
}) {
  const [failed, setFailed] = useState(false)

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <div className={fallbackClassName || className} style={fallbackStyle}>
      {icon}
      {children}
    </div>
  )
}
