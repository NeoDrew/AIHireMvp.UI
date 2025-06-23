import { MotionBox } from './MotionBox';

interface FadeInOnViewProps {
    children: React.ReactNode;
    delay?: number;
    isInView: boolean;
}

const FadeInOnView = ({ children, delay = 0, isInView }: FadeInOnViewProps) => {
    return (
        <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay }}
        >
            {children}
        </MotionBox>
    );
};

export default FadeInOnView;