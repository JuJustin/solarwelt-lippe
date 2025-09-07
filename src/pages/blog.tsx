import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  Button
} from '@chakra-ui/react';

import Navbar2 from '../components/Navbar2';
import WhatsAppPopup from '../components/WhatsAppPopup';
import FooterHero from '../components/FooterHero';
import Canvas from '../components/Canvas';
import LargeWithLogoCentered from '../components/Footer2';
import LazyShow from '../components/LazyShow';

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
};

const blogPosts: BlogPost[] = [
  {
    slug: 'foerderung-photovoltaik-detmold',
    title: 'Förderung Photovoltaik Detmold — Ihr Weg zur staatlichen Unterstützung',
    date: '2025-08-10',
    excerpt:
      'Erfahren Sie alles über aktuelle Förderungen für Photovoltaik in Detmold und wie Sie davon profitieren können.',
    image: '/assets/images/foerderung-detmold.png',
  },
  {
    slug: 'stadtwerke-detmold-photovoltaik',
    title: 'Stadtwerke Detmold Photovoltaik – Ratgeber 2025 zu Einspeisung, Netzanschluss & Vergleich',
    date: '2025-08-13',
    excerpt:
      'Ihr Photovoltaik-Ratgeber 2025: Alles zu Einspeisung, Netzanschluss und ob sich die Stadtwerke Detmold oder eine eigene PV-Anlage mehr lohnt.',
    image: '/assets/images/stadtwerke-detmold-photovoltaik.jpeg',
  },
  {
    slug: 'photovoltaikanlage-mit-speicher-paderborn-2025',
    title: 'Photovoltaikanlage mit Speicher Paderborn 2025 – Lohnt sich das? Kosten, Förderung & Wirtschaftlichkeit',
    date: '2025-08-14',
    excerpt:
      'Photovoltaikanlage mit Speicher in Paderborn 2025: Kosten, Förderung, Wirtschaftlichkeit & Amortisation. ✓ KfW-Kredit 270 ✓ Unabhängigkeit ✓ Kostenlose Beratung',
    image: '/assets/images/photovoltaikanlage-speicher-paderborn-2025.png',
  },
  {
    slug: 'solar-vs-photovoltaik-vergleich-2025',
    title: 'Solar vs. Photovoltaik – Unterschiede, Vorteile & was sich 2025 lohnt',
    date: '2025-08-17',
    excerpt:
      'Solar oder Photovoltaik? Wir erklären die Unterschiede zwischen Solarthermie und Photovoltaik, welche Lösung sich 2025 in OWL lohnt und was Hausbesitzer in Paderborn, Detmold & Umgebung beachten sollten.',
    image: '/assets/images/solar-vs-photovoltaik.jpeg',
  }
];


const BlogIndex: React.FC = () => {
  // Neueste zuerst sortieren
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Head>
        <title>Blog | Solarwelt Lippe</title>
        <meta
          name="description"
          content="Neueste Blogartikel zu Photovoltaik, Förderungen und Solartechnik im Kreis Lippe – aktuell, lokal und informativ."
        />
      </Head>

      <Navbar2 />
      <WhatsAppPopup />

      <Box className="bg-background gap-y-16 overflow-hidden" justifyContent={'center'}>
        <Stack w="100%" className="relative bg-background z-0" align={'center'}>
          <Box w={{ base: 'sm', md: '7xl' }}>
            <Text fontSize={{ base: '24px', md: '36px' }} fontWeight="1000" pt={16} pb={6}>
              Unser Photovoltaik-Blog
            </Text>
          </Box>
        </Stack>

        <Flex align={'center'} w={'100%'} justifyContent={'center'}>
          <SimpleGrid maxW={{ base: 'sm', md: '7xl' }} columns={{ base: 1, md: 3 }} spacing={10}>
            {sortedPosts.map((post) => (
              <Box
                key={post.slug}
                bg="white"
                shadow="md"
                borderRadius="md"
                overflow="hidden"
                border="1px solid #eee"
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                )}
                <Box p={5}>
                  <Text fontSize="xl" fontWeight="bold" mb={2}>
                    {post.title}
                  </Text>
                  <Text fontSize="sm" color="gray.500" mb={3}>
                    {new Date(post.date).toLocaleDateString('de-DE')}
                  </Text>
                  <Text noOfLines={3} color="gray.700" mb={4}>
                    {post.excerpt}
                  </Text>
                  <Link href={`/blog/${post.slug}`} passHref>
                    <Button
                      size="sm"
                      bg="#FE8800"
                      color="white"
                      _hover={{ bg: '#e57600' }}
                    >
                      Weiterlesen
                    </Button>
                  </Link>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>

        <LazyShow>
          <FooterHero />
        </LazyShow>
        <LazyShow>
          <>
            <Canvas />
            <LargeWithLogoCentered />
          </>
        </LazyShow>
      </Box>
    </>
  );
};

export default BlogIndex;
