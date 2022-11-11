import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (pageProps && pageProps.pathname) === '/' ? (
    <Wrapper>
      <Component {...pageProps} />
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        html {
          width: 100vw;
          height: 100vh;
          background: black;
        }
        body {
          width: 100vw;
          height: 100vh;

          display: flex;
          flex-direction: column;
          align-items: center;

          line-height: 1;
          font-family: 'Open Sans', sans-serif;
          color: #444444;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        button {
          background: inherit;
          border: none;
          border-radius: 0;
          padding: 0;
          cursor: pointer;
        }

        a {
          color: inherit;
          text-decoration: none;
          outline: none;
        }

        a:visited {
          text-decoration: none;
          color: inherit;
        }

        input {
          -webkit-appearance: none; /* Safari and Chrome */
          -moz-appearance: none; /* Firefox */
          appearance: none;
        }

        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }

        input:focus {
          outline: none;
        }
      `}</style>
    </Wrapper>
  ) : (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        html {
          width: 100vw;
          height: 100vh;
          background: black;
        }
        body {
          width: 100vw;
          height: 100vh;

          display: flex;
          flex-direction: column;
          align-items: center;

          line-height: 1;
          font-family: 'Open Sans', sans-serif;
          color: #444444;
          -ms-overflow-style: none;
        }

        ::-webkit-scrollbar {
          display: none;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        button {
          background: inherit;
          border: none;
          border-radius: 0;
          padding: 0;
          cursor: pointer;
        }

        a {
          color: inherit;
          text-decoration: none;
          outline: none;
        }

        a:visited {
          text-decoration: none;
          color: inherit;
        }

        input {
          -webkit-appearance: none; /* Safari and Chrome */
          -moz-appearance: none; /* Firefox */
          appearance: none;
        }

        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }

        input:focus {
          outline: none;
        }

        font-family: 'SF Pro Display';
      `}</style>
    </Layout>
  );
}
