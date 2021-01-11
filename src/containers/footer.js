import React from 'react';
import footerLinks from '../fixtures/footer';
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Frame>
        <Footer.Top>Questions? Contact us.</Footer.Top>
        <Footer.Break />
        <Footer.List>
          {footerLinks.map((link) => (
            <Footer.ListItem key={link.id}>
              <Footer.Link href={link.link} key={link.id}>
                {link.title}
              </Footer.Link>
            </Footer.ListItem>
          ))}
        </Footer.List>
        <Footer.Break />
        <Footer.Country>Netflix United Kingdom</Footer.Country>
      </Footer.Frame>
    </Footer>
  );
}
