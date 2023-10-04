'use client';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Secbar from './components/Secbar';
import { createGlobalStyle } from 'styled-components';
import Slides from './components/Slider';
import Gallery from './components/Gallery';
import Multi from './components/Multi';
import Button from './components/Button';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Amazon';
  src: url('/OfficinaSansStd-Bold.otf') format('opentype');
}
`;

export default function Home() {
  return (
    <>
    <div style={{ fontFamily: 'Amazon, sans-serif' }}>
      <Navbar />
      <Secbar />
      <Slides />
      <Gallery />
      <Multi />
      <Button />
    </div>
    </>
  );
}
