interface SchemaMarkupProps {
  type: 'LocalBusiness' | 'Service' | 'Article' | 'FAQPage';
  data: any;
}

const SchemaMarkup = ({ type, data }: SchemaMarkupProps) => {
  const generateSchema = () => {
    const baseOrganization = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "United Security & Control Systems",
      "description": "Professional security solutions for Southwest Virginia businesses - access control, security cameras, and locksmith services since 1988.",
      "url": "https://unitedsecurityva.com",
      "telephone": "540-989-9393",
      "email": "info@unitedsecurityva.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6405 Merriman Rd # 204",
        "addressLocality": "Roanoke",
        "addressRegion": "VA",
        "postalCode": "24018",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "37.2431",
        "longitude": "-79.9414"
      },
      "areaServed": [
        "Southwest Virginia",
        "Roanoke Valley",
        "New River Valley",
        "Lynchburg",
        "Blacksburg",
        "Christiansburg",
        "Martinsville"
      ],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
      },
      "sameAs": [
        "https://www.facebook.com/unitedsecurityva",
        "https://www.linkedin.com/company/united-security-control-systems"
      ],
      "licenses": "DCJS# 11-3283",
      "foundingDate": "1988",
      "slogan": "Southwest Virginia's Trusted Security Partner"
    };

    switch (type) {
      case 'LocalBusiness':
        return {
          ...baseOrganization,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Security Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Access Control Systems",
                  "description": "Commercial access control installation and maintenance"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Security Camera Installation",
                  "description": "Professional surveillance camera systems and monitoring"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Locksmith Services",
                  "description": "Professional locksmith services for businesses and institutions"
                }
              }
            ]
          },
          ...data
        };

      case 'Service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "provider": baseOrganization,
          "areaServed": baseOrganization.areaServed,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": data.serviceName,
            "itemListElement": data.offers || []
          },
          ...data
        };

      case 'Article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "publisher": baseOrganization,
          "author": {
            "@type": "Organization",
            "name": "United Security & Control Systems"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url
          },
          ...data
        };

      case 'FAQPage':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.questions || []
        };

      default:
        return baseOrganization;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateSchema())
      }}
    />
  );
};

export default SchemaMarkup;