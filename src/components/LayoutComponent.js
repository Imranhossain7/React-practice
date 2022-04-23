import useWindowWidth from './hooks/useWindowWidth';

export default function LayoutComponentOne() {
    const onSmallScreen = useWindowWidth(768);

    return (
        <div>
            <h1>You are on {onSmallScreen ? 'Small' : 'Large'} device</h1>
        </div>
    );
}
