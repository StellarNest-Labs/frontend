import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0d1712',
          borderRadius: 40,
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 128,
            height: 128,
            borderRadius: '50%',
            border: '5px solid #3fcd97',
            opacity: 0.85,
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 88,
            height: 88,
            borderRadius: '50%',
            border: '5px solid #eabf5c',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: '#eabf5c',
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size },
  );
}
