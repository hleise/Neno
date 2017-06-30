import React, { Component } from 'react';
import PageLayout from './layout/PageLayout'
var SimplybookWidget = require('./SimplyBookMe')

class SimplyBooking extends Component {
  render() {
    var widget = new SimplybookWidget({
      "widget_type":"iframe",
      "url":"https:vivoapps.simplybook.me",
      "theme":"default",
      "theme_settings":{
        "sb_base_color":"#f1f1f1",
        "booking_nav_bg_color":"#ffffff",
        "body_bg_color":"#f1f1f1",
        "dark_font_color":"#494949",
        "light_font_color":"#ffffff",
        "btn_color_1":"#5e7da7"},
        "timeline":"modern",
        "datepicker":"top_calendar",
        "is_rtl":false,
        "app_config":{
          "predefined":[]}
        });
    return (
      <div>
        <PageLayout>
          <div id='booking'>
          {widget.init()}
          </div>
        </PageLayout>
      </div>
    );
  }
}

export default SimplyBooking;