import useWindowWidth from './hooks/useWindowWidth';

export default function LayoutComponentTwo() {
    const onSmallScreen = useWindowWidth(768);

    return (
        <div className={onSmallScreen ? 'Small' : 'Large'}>
            <h1>You are on personal device</h1>
        </div>
    );
}
