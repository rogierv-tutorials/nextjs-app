import React, { Component } from 'react';
import Link from 'next/link';
import './../style.scss'
import './components/head'
import Head from './components/head';

class Blog extends React.Component {
  render() {
    return (
      <div className="container">
        <Head title="Blog" description="Blog page description"
        title="How to use Nextjs with React" url="https://example.com"></Head>
        <h1 className="title">Hello, from Blog page</h1>

        <Link href="/">
        <a>Return to home page</a>
        </Link>
      </div>
    );
  }
}

export default Blog;