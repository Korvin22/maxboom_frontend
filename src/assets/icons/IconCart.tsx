import React, { FC, useMemo } from 'react'
import type { TProps } from '../../models/SvgModel'


/**
 * @param {Array<string> | string} styles - стилизация иконки
 *
 * @return {svg} - svg изображение
 */
const IconCart: FC<TProps> = props => {
  const { styles } = props
  const style = useMemo(() => {
    return Array.isArray(styles) ? styles.join(' ') : styles
  }, [styles])

  return (
    <svg viewBox="0 0 20 21" fill="white" className={style} xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.998 16.493C12.264 16.493 12.519 16.388 12.708 16.201C12.8009 16.1086 12.8746 15.9987 12.9249 15.8777C12.9752 15.7567 13.001 15.627 13.001 15.496V13.503C13.0009 13.3719 12.9749 13.2421 12.9245 13.1211C12.874 13.0001 12.8001 12.8902 12.707 12.798C12.5183 12.6104 12.263 12.5051 11.997 12.5051C11.7309 12.5051 11.4756 12.6104 11.287 12.798C11.194 12.8903 11.1203 13.0002 11.07 13.1212C11.0197 13.2422 10.9939 13.3719 10.994 13.503V15.496C10.994 15.761 11.1 16.014 11.288 16.201C11.476 16.388 11.731 16.493 11.998 16.493ZM7.98295 16.493C8.24895 16.493 8.50495 16.388 8.69295 16.201C8.78607 16.1087 8.85999 15.9989 8.91045 15.8779C8.96091 15.7569 8.98691 15.6271 8.98695 15.496V13.503C8.98691 13.3719 8.96091 13.2421 8.91045 13.1211C8.85999 13.0001 8.78607 12.8902 8.69295 12.798C8.50427 12.6104 8.24902 12.5051 7.98295 12.5051C7.71688 12.5051 7.46163 12.6104 7.27295 12.798C7.17983 12.8902 7.10591 13.0001 7.05545 13.1211C7.00499 13.2421 6.97899 13.3719 6.97895 13.503V15.496C6.97895 15.761 7.08495 16.014 7.27295 16.201C7.46195 16.388 7.71695 16.493 7.98295 16.493ZM17.016 4.53295H15.63L13.894 1.09195C13.8408 0.965202 13.7621 0.850816 13.6626 0.75599C13.5631 0.661164 13.4451 0.587949 13.316 0.540952C13.1209 0.469656 12.9087 0.460205 12.7081 0.513888C12.5075 0.56757 12.3283 0.681776 12.195 0.840952C12.063 0.999776 11.9838 1.1957 11.9682 1.40158C11.9526 1.60745 12.0014 1.81308 12.108 1.98995L13.382 4.53095H6.59895L7.87395 1.98995C7.97182 1.75733 7.97716 1.49612 7.88887 1.25969C7.80058 1.02327 7.62534 0.829486 7.39895 0.717952C7.17276 0.604872 6.91237 0.580759 6.66926 0.650378C6.42615 0.719998 6.218 0.878284 6.08595 1.09395L4.34995 4.53195H2.96495C2.25495 4.54295 1.57295 4.80195 1.03695 5.26395C0.501379 5.72333 0.146651 6.35821 0.0361812 7.05511C-0.0742884 7.752 0.0667034 8.46547 0.433951 9.06795C0.802093 9.67211 1.37147 10.1271 2.04195 10.353L2.78395 17.789C2.85895 18.529 3.20895 19.215 3.76595 19.712C4.32295 20.21 5.04595 20.484 5.79595 20.48H14.206C14.954 20.4838 15.6769 20.2102 16.235 19.712C16.7906 19.2159 17.1405 18.5299 17.216 17.789L17.959 10.353C18.6309 10.1263 19.2012 9.66936 19.569 9.06295C19.9357 8.45852 20.075 7.74318 19.9619 7.04529C19.8489 6.34741 19.4908 5.71266 18.952 5.25495C18.4116 4.794 17.7262 4.53904 17.016 4.53295ZM15.199 17.589C15.1741 17.8363 15.0574 18.0654 14.872 18.231C14.6857 18.3969 14.4444 18.4877 14.195 18.486H5.78495C5.53495 18.488 5.29495 18.396 5.10895 18.231C4.9235 18.0654 4.80683 17.8363 4.78195 17.589L4.06895 10.513H15.912L15.199 17.589ZM17.016 8.51895H2.96495C2.69895 8.51895 2.44395 8.41395 2.25495 8.22695C2.16189 8.13464 2.08802 8.02482 2.03761 7.90382C1.98721 7.78282 1.96125 7.65303 1.96125 7.52195C1.96125 7.39087 1.98721 7.26109 2.03761 7.14009C2.08802 7.01909 2.16189 6.90926 2.25495 6.81695C2.44395 6.63095 2.69895 6.52595 2.96495 6.52595H17.0149C17.2819 6.52595 17.537 6.63095 17.725 6.81795C17.818 6.91026 17.8919 7.02009 17.9423 7.14109C17.9927 7.26209 18.0186 7.39187 18.0186 7.52295C18.0186 7.65403 17.9927 7.78382 17.9423 7.90482C17.8919 8.02582 17.818 8.13564 17.725 8.22795C17.536 8.41485 17.2807 8.51946 17.0149 8.51895H17.016Z"
        fill="white"
      />
    </svg>
  )
}

export default IconCart
