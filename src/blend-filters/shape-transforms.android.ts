import { Image } from 'react-native'

export interface ColorBlendConfig {
  readonly dstImage: Image
  readonly srcColor: string
  readonly disableCache?: boolean
}

const asNativeBlendConfig = (config: Object) => ({
  ...config,
  name: 'PorterDuffXfermode'
})

const asNativeBlendColorConfig = ({ disableCache, dstImage, srcColor }: ColorBlendConfig) => ({
  name: 'PorterDuffColorFilter',
  image: dstImage,
  color: srcColor,
  disableCache
})

export const shapeTransforms = {
  PlusBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'ADD'
  }),

  ClearBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'CLEAR'
  }),

  DarkenBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'DARKEN'
  }),

  DstBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'DST'
  }),

  DstATopBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'DST_ATOP'
  }),

  DstInBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'DST_IN'
  }),

  DstOutBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'DST_OUT'
  }),

  DstOverBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'DST_OVER'
  }),

  LightenBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'LIGHTEN'
  }),

  ModulateBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'MULTIPLY'
  }),

  OverlayBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'OVERLAY'
  }),

  ScreenBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'SCREEN'
  }),

  SrcBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'SRC'
  }),

  SrcATopBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'SRC_ATOP'
  }),

  SrcInBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'SRC_IN'
  }),

  SrcOutBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'SRC_OUT'
  }),

  SrcOverBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'SRC_OVER'
  }),

  XorBlend: (config: Object) => ({
    ...asNativeBlendConfig(config),
    mode: 'XOR'
  }),

  PlusBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'ADD'
  }),

  ClearBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'CLEAR'
  }),

  DarkenBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'DARKEN'
  }),

  DstBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'DST'
  }),

  DstATopBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'DST_ATOP'
  }),

  DstInBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'DST_IN'
  }),

  DstOutBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'DST_OUT'
  }),

  DstOverBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'DST_OVER'
  }),

  LightenBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'LIGHTEN'
  }),

  ModulateBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'MULTIPLY'
  }),

  OverlayBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'OVERLAY'
  }),

  ScreenBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'SCREEN'
  }),

  SrcBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'SRC'
  }),

  SrcATopBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'SRC_ATOP'
  }),

  SrcInBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'SRC_IN'
  }),

  SrcOutBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'SRC_OUT'
  }),

  SrcOverBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'SRC_OVER'
  }),

  XorBlendColor: (config: ColorBlendConfig) => ({
    ...asNativeBlendColorConfig(config),
    mode: 'XOR'
  })
}