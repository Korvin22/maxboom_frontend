import React, { FC } from 'react'
import IconCart from '../../assets/icons/IconCart'
import IconEye from '../../assets/icons/IconEye'
import { ECardView } from '../../utils/types'
import { Button, ButtonSize, ButtonTheme } from '../../shared/ui/Button/Button'

type TWidgetButtonsPurchase = {
  isInCart: boolean
  handleAddToCart: VoidFunction
  onEyeClick: VoidFunction
  layout: ECardView
}

/**
 * Компонент (виджет) группы кнопок для добавления в корзину и открытия поп-апа с подробной информацией о товаре.
 * @param {boolean} isInCart - добавлен ли товар в корзину;
 * @param {function} handleAddToCart - функция добавления товара в корзину;
 * @param {function} onEyeClick - функция открытия поп-апа с дополнительной информацией о товаре;
 * @param {string} layout - текущий вид отображения карточки товара;
 */
export const WidgetButtonsPurchase: FC<TWidgetButtonsPurchase> = ({
  isInCart,
  handleAddToCart,
  onEyeClick,
  layout
}) => {
  const size = layout === ECardView.COMPACT ? ButtonSize.S : ButtonSize.XS

  return (
    <>
      <Button color={isInCart ? ButtonTheme.SUCCESS : ButtonTheme.PRIMARY} size={size} onClick={handleAddToCart}>
        <IconCart />
        Купить
      </Button>
      <Button color={ButtonTheme.OUTLINE} size={size} onClick={onEyeClick}>
        <IconEye />
      </Button>
    </>
  )
}
