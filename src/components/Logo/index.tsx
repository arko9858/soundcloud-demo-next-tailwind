const Logo = () => {
  return (
    <div className="bg-black">
      <a
        style={{
          display: "block",
          background:
            "transparent url(https://a-v2.sndcdn.com/assets/images/brand-1b72dd82.svg) no-repeat 0 11px",
          backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAWCAQAAAAs/tcnAAABMUlEQVR4Ac3UJfQUARTGUaxnrBHpPeDu7u7uTg/QO/SK9q1U3KHg2i7fH4exNeSdc9/ZNL/RHfRfjdHOuOajt246b7Fh/T38WO/9OnfM7s+hx3gUh5XNWYN7D4wnTlOe6OGsv/6eQlQFmNX9WScTs4jqwD3DOr/j04gJxHyiOsCiTgITibnEdGIJURc410lgJrGYmE+sIuoCz1301BstGwxueqQLiVXEMmI9cVp7c9WIYmAqkUysIjYQa4mtRAJtJwb//kgXEdOJTcR2Yiuxi2g/wIYfgTnEBmIFsYvYS+whDhCdBFo/ApuJvcRO4hBxhDhMHCU6Cbz5EThKHCe+7BNEcXceKFxB/e7yFs0h1hP1u/OHXHiL6nfnr2nhO6jfR3r50L5cR9O+oX5+/FX8vfkElmh0Xu+KRLEAAAAASUVORK5CYII=)`,
          backgroundPositionX: "12px",
          backgroundSize: "48px 22px",
          width: "69px",
          marginRight: "unset",
          font: "0/0 caption",
          height: "100%",
        }}
        href="https://soundcloud.com/"
      >
        SoundCloud
      </a>
    </div>
  );
};

export default Logo;
