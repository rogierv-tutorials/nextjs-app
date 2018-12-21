import React, { Component } from 'react';
import Link from 'next/link';
import './../style.scss'
import './components/head'
import Head from './components/head';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Hello, from Home page</h1>

        <Link href="/blog">
        <a>Blog</a>
        </Link>
      </div>
    );
  }
}

export default Home;