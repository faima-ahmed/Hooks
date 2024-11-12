
import useWindowWidth from '../hooks/useWindowWidth';

function LayoutComponentOne() {
    const onSmallScreen=useWindowWidth(600);
    return (
      <div>
        <h1>you are browsing on {onSmallScreen ? "small" : "largec"} device</h1>
      </div>
    );
}

export default LayoutComponentOne;