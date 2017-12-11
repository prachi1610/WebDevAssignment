function toggleElementAttribute(element, attribute){
  attributeVal = element.getAttribute(attribute);
  toggleVal1 = element.getAttribute('data-toggleVal1');
  toggleVal2 = element.getAttribute('data-toggleVal2');
  if (attributeVal == toggleVal1) {
          toggleTo = toggleVal2;
      } else {
          toggleTo = toggleVal1;
      };
      element.setAttribute( attribute, toggleTo );
};
