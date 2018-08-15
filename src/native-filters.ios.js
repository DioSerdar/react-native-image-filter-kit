import React from 'react';
import {
  ImageFilterWithColorManagement,
  ImageFilterWithoutColorManagement
} from './image-filter';

const filter = (paramNames, imageNames = ['inputImage']) => ({ paramNames, imageNames });

const filters = {
  CIBoxBlur: filter(['inputRadius']),
  CIDiscBlur: filter(['inputRadius']),
  CIGaussianBlur: filter(['inputRadius']),
  // CIMaskedVariableBlur: filter(['inputRadius', 'inputMask']),
  CIMedianFilter: filter([]),
  CIMotionBlur: filter(['inputRadius', 'inputAngle']),
  CINoiseReduction: filter(['inputNoiseLevel', 'inputSharpness']),
  CIZoomBlur: filter(['inputCenter', 'inputAmount']),
  CIColorClamp: filter(['inputMinComponents', 'inputMaxComponents']),
  CIColorControls: filter(['inputSaturation', 'inputBrightness', 'inputContrast']),
  CIColorMatrix: filter([
    'inputRVector', 'inputGVector', 'inputBVector', 'inputAVector', 'inputBiasVector'
  ]),
  // CIColorPolynomial,
  // CIExposureAdjust,
  // CIGammaAdjust,
  CIHueAdjust: filter(['inputAngle']),
  // CILinearToSRGBToneCurve,
  // CISRGBToneCurveToLinear,
  // CITemperatureAndTint,
  // CIToneCurve,
  CIVibrance: filter(['inputAmount']),
  // CIWhitePointAdjust,
  // CIColorCrossPolynomial,
  // CIColorCube,
  // CIColorCubeWithColorSpace,
  CIColorInvert: filter([]),
  // CIColorMap,
  // CIColorMonochrome,
  CIColorPosterize: filter(['inputLevels']),
  // CIFalseColor,
  CIMaskToAlpha: filter([]),
  CIMaximumComponent: filter([]),
  CIMinimumComponent: filter([]),
  CIPhotoEffectChrome: filter([]),
  CIPhotoEffectFade: filter([]),
  CIPhotoEffectInstant: filter([]),
  CIPhotoEffectMono: filter([]),
  CIPhotoEffectNoir: filter([]),
  CIPhotoEffectProcess: filter([]),
  CIPhotoEffectTonal: filter([]),
  CIPhotoEffectTransfer: filter([]),
  // CISepiaTone,
  // CIVignette,
  CIVignetteEffect: filter(['inputCenter', 'inputIntensity', 'inputRadius']),
  // CIAdditionCompositing,
  // CIColorBlendMode,
  // CIColorBurnBlendMode,
  // CIColorDodgeBlendMode,
  // CIDarkenBlendMode,
  // CIDifferenceBlendMode,
  // CIDivideBlendMode,
  // CIExclusionBlendMode,
  // CIHardLightBlendMode,
  // CIHueBlendMode,
  // CILightenBlendMode,
  // CILinearBurnBlendMode,
  // CILinearDodgeBlendMode,
  // CILuminosityBlendMode,
  // CIMaximumCompositing,
  // CIMinimumCompositing,
  // CIMultiplyBlendMode,
  // CIMultiplyCompositing,
  // CIOverlayBlendMode,
  // CIPinLightBlendMode,
  // CISaturationBlendMode,
  // CIScreenBlendMode,
  // CISoftLightBlendMode,
  // CISourceAtopCompositing,
  // CISourceInCompositing,
  // CISourceOutCompositing,
  // CISourceOverCompositing,
  // CISubtractBlendMode,
  CIBumpDistortion: filter(['inputCenter', 'inputRadius', 'inputScale']),
  CIBumpDistortionLinear: filter(['inputCenter', 'inputRadius', 'inputScale', 'inputAngle']),
  CICircleSplashDistortion: filter(['inputCenter', 'inputRadius']),
  CICircularWrap: filter(['inputCenter', 'inputRadius', 'inputAngle']),
  // CIDroste,
  // CIDisplacementDistortion,
  // CIGlassDistortion,
  // CIGlassLozenge,
  // CIHoleDistortion,
  // CILightTunnel,
  // CIPinchDistortion,
  // CIStretchCrop,
  // CITorusLensDistortion,
  // CITwirlDistortion,
  CIVortexDistortion: filter(['inputCenter', 'inputRadius', 'inputAngle']),
  // CIAztecCodeGenerator,
  // CICheckerboardGenerator,
  // CICode128BarcodeGenerator,
  // CIConstantColorGenerator,
  // CILenticularHaloGenerator,
  // CIPDF417BarcodeGenerator,
  // CIQRCodeGenerator,
  // CIRandomGenerator,
  // CIStarShineGenerator,
  // CIStripesGenerator,
  // CISunbeamsGenerator,
  // CIAffineTransform,
  // CICrop,
  // CILanczosScaleTransform,
  // CIPerspectiveCorrection,
  // CIPerspectiveTransform,
  // CIPerspectiveTransformWithExtent,
  // CIStraightenFilter,
  // CIGaussianGradient,
  // CILinearGradient,
  // CIRadialGradient,
  // CISmoothLinearGradient,
  CICircularScreen: filter(['inputCenter', 'inputWidth', 'inputSharpness']),
  // CICMYKHalftone,
  CIDotScreen: filter(['inputCenter', 'inputAngle', 'inputWidth', 'inputSharpness']),
  // CIHatchedScreen,
  // CILineScreen,
  // CIAreaAverage,
  // CIAreaHistogram,
  // CIRowAverage,
  // CIColumnAverage,
  // CIHistogramDisplayFilter,
  // CIAreaMaximum,
  // CIAreaMinimum,
  // CIAreaMaximumAlpha,
  // CIAreaMinimumAlpha,
  CISharpenLuminance: filter(['inputSharpness']),
  CIUnsharpMask: filter(['inputRadius', 'inputIntensity']),
  // CIBlendWithAlphaMask,
  // CIBlendWithMask,
  // CIBloom,
  // CIComicEffect,
  // CIConvolution3X3,
  // CIConvolution5X5,
  // CIConvolution7X7,
  // CIConvolution9Horizontal,
  // CIConvolution9Vertical,
  CICrystallize: filter(['inputRadius', 'inputCenter']),
  // CIDepthOfField,
  // CIEdges,
  // CIEdgeWork,
  // CIGloom,
  // CIHeightFieldFromMask,
  // CIHexagonalPixellate,
  // CIHighlightShadowAdjust,
  // CILineOverlay,
  // CIPixellate,
  // CIPointillize,
  // CIShadedMaterial,
  // CISpotColor,
  // CISpotLight,
  // CIAffineClamp,
  // CIAffineTile,
  // CIEightfoldReflectedTile,
  // CIFourfoldReflectedTile,
  // CIFourfoldRotatedTile,
  // CIFourfoldTranslatedTile,
  // CIGlideReflectedTile,
  // CIKaleidoscope,
  // CIOpTile,
  // CIParallelogramTile,
  // CIPerspectiveTile,
  // CISixfoldReflectedTile,
  // CISixfoldRotatedTile,
  // CITriangleKaleidoscope,
  // CITriangleTile,
  // CITwelvefoldReflectedTile,
  // CIAccordionFoldTransition,
  // CIBarsSwipeTransition,
  // CICopyMachineTransition,
  // CIDisintegrateWithMaskTransition,
  // CIDissolveTransition,
  // CIFlashTransition,
  // CIModTransition,
  // CIPageCurlTransition,
  // CIPageCurlWithShadowTransition,
  // CIRippleTransition,
  // CISwipeTransition
};

const nativeImageFilter = (name) => {
  return name === 'CIColorMatrix' || name === 'CIColorInvert'
    ? ImageFilterWithoutColorManagement
    : ImageFilterWithColorManagement;
};

const createImageNativeFilter = (name, config, ImageFilter) => ({ children, ...restProps }) => (
  <ImageFilter
    name={name}
    {...config}
    {...restProps}
  >
    {children}
  </ImageFilter>
);

export default Object.keys(filters).reduce(
  (acc, name) => {
    acc[name] = createImageNativeFilter(name, filters[name], nativeImageFilter(name));
    acc[name].displayName = name;
    return acc;
  },
  {}
);

