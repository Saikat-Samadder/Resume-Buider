// importing the  images of templates

import template_1 from "../Images/sample_1.jpg";
import template_2 from "../Images/sample_2.jpg";

// importing all the templates 

import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";

//templates are  exported to process further
export const templates = [
  {
    id: 1,
    template_name: "Template-1",
    template_img: template_1,
    template: <Template1 />,
  },
  {
    id: 2,
    template_name: "Template-2",
    template_img: template_2,
    template: <Template2 />,
  },
];  
