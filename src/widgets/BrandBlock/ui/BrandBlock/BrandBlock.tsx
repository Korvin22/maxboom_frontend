import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes } from '@/shared/config/routerConfig/routes'
import { brandSelector } from '../../selectors/selectors'
import { fetchBrands } from '../../slice/brandSlice'
import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import IconLink from '@/assets/icons/IconLink'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import BrandCard from '@/entities/BrandCard/BrandCard'
import { TEXT_OUR_BRANDS, TEXT_ALL_BRANDS } from '@/shared/constants/constants'
import styles from './BrandBlock.module.scss'
import { BRANDS_FOR_MAIN_NUMBER } from '@/shared/constants/constants'

/**
 * Компонент списка брендов для главной страницы.
 */
const BrandBlock = () => {
  const dispatch = useDispatch<AppDispatch>()
  const brands = useSelector(brandSelector)

  useEffect(() => {
    dispatch(fetchBrands())
  }, [])

  return (
    <section className={styles.brands}>
      <div className={styles.brands__header}>
        <Heading type={HeadingType.NORMAL}>{TEXT_OUR_BRANDS}</Heading>
        <Link to={Routes.BRANDS} className={styles.link__text}>
          {TEXT_ALL_BRANDS}
          {IconLink({ styles: styles.svg })}
        </Link>
      </div>
      <ul className={styles.brands__body}>
        {brands.slice(0, BRANDS_FOR_MAIN_NUMBER).map(card => (
          <BrandCard card={card} key={card.id} />
        ))}
      </ul>
    </section>
  )
}

export default BrandBlock
