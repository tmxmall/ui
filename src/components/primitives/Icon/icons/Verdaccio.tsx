import React from 'react'

const verdaccio = {
  viewBox: '0 0 100 100',
  content: (
    <>
      <defs>
        <path id="prefix__b" d="M48 17.6L32.8 48H24L.4.8h15.2l12.8 25.6 4.4-8.8H48z" />
        <filter x="-20%" y="-11.7%" width="139.9%" height="140.3%" filterUnits="objectBoundingBox" id="prefix__a">
          <feOffset dy={4} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation={2.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0906646286 0" in="shadowBlurOuter1" />
        </filter>
        <path id="prefix__d" d="M50.8 12H35.6L41.2.8h15.2L50.8 12z" />
        <filter x="-45.7%" y="-49.1%" width="191.3%" height="269.6%" filterUnits="objectBoundingBox" id="prefix__c">
          <feOffset dy={4} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation={2.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0906646286 0" in="shadowBlurOuter1" />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill="#F7F8F6" width={100} height={100} rx={37} />
        <g transform="translate(22 29)">
          <use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
          <path
            stroke="#405236"
            strokeWidth={2.4}
            d="M46.058 18.8H33.542L28.4 29.083 14.858 2H2.342l22.4 44.8h7.316l14-28z"
            fill="#405236"
          />
        </g>
        <g transform="translate(22 29)">
          <use fill="#000" filter="url(#prefix__c)" xlinkHref="#prefix__d" />
          <path stroke="#CD4000" strokeWidth={2.4} d="M50.058 10.8l4.4-8.8H41.942l-4.4 8.8h12.516z" fill="#CD4000" />
        </g>
        <path
          d="M54.06 75.8l2.575-5.112L36.857 31H24.342l22.4 44.8h7.319z"
          stroke="#405236"
          strokeWidth={2.4}
          fill="#4A5E3F"
        />
        <path
          d="M59.6 31h15.221M55.6 35h15.221M51.6 39.8h15.221"
          stroke="#CD4000"
          strokeWidth={2.4}
          strokeLinecap="square"
        />
      </g>
    </>
  ),
}

export default verdaccio
