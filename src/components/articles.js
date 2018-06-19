import React, { Component } from 'react';
import Notes from './notes.js';

class Articles extends Component {
    render() {
      return (
        <div className="Articles">
        <div class="container">
                <div class="row">
                    <div class="col-sm-3" />
                    <div class="col-sm-8" id="note">
                    <Notes />
                    </div>
                    <div class="col-sm-1" />
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Articles;