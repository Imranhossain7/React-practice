import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default function Content({ theme }) {
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter count={count} theme={theme} incrementCount={incrementCount} />
                )}
            </Counter>
        </div>
    );
}
