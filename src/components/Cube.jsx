export default function Cube() {
  return (
    <div className="cube-scene" aria-hidden="true">
      <div className="cube-x-spin">
        <div className="cube-y-spin">
          <div className="cube-z-spin">
            <div className="cube-3d">
              <div className="cube-face face-front" />
              <div className="cube-face face-back" />
              <div className="cube-face face-left" />
              <div className="cube-face face-right" />
              <div className="cube-face face-top" />
              <div className="cube-face face-bottom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
