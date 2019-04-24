import { StyleSheet } from 'react-native';
import { DEFAULT_RADIUS_SIZE } from './constants';

export const borderWidth = StyleSheet.hairlineWidth;
export const borderWidthLarge = StyleSheet.hairlineWidth * 2;
export const borderWidthExtra = StyleSheet.hairlineWidth * 2.5;
export const borderColor = 'rgba(0,0,0,0.2)';
export const borderRadius = `${DEFAULT_RADIUS_SIZE / 2}px`;
export const borderRadiusLarge = `${DEFAULT_RADIUS_SIZE * 2}px`;
export const borderRadiusExtraLarge = `${DEFAULT_RADIUS_SIZE * 4}px`;
