import React from 'react';
import { SkeletonBox as StyledSkeletonBox } from './SkeletonBox.styles';

interface SkeletonBoxProps {
	width?: string;
	height?: string;
	className?: string;
	style?: React.CSSProperties;
}

const SkeletonBox = ({ width, height, className, style }: SkeletonBoxProps) => {
	return (
		<StyledSkeletonBox
			width={width}
			height={height}
			className={className}
			style={style}
		/>
	);
};

export default SkeletonBox;
