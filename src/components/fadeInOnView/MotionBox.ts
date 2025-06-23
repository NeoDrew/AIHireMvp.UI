import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion, HTMLMotionProps } from 'framer-motion';

type MotionBoxProps = HTMLMotionProps<'div'>;

export const MotionBox = chakra(motion.div, {
    /**
     * Allow motion props like `transition`, `initial`, `animate`, etc.
     */
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
}) as React.FC<MotionBoxProps>;
