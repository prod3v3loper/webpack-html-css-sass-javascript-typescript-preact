import './style.scss';
import { h, render, Component } from 'preact';

// Render content
let ref = render( (
    <div id="wrapper">
        <span>Hallo Welt!</span>
        <button onClick={e => alert( "hi!" )}>Klick mich!</button>
    </div>
), document.body );

// HMR
declare const module: any;

if ( module.hot ) {
    module.hot.accept();
    module.hot.dispose( function () {
        // Clean old content
        render( null, document.body, ref );
    } );
}
