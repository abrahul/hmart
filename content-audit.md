# HMART Building Solutions — source content audit

Audit date: 28 November 2026  
Source: <https://www.hmartbs.com/>  
Scope: the seven public routes requested for migration.

## Global inventory

- Header: HMART logo, a `Call` action, and navigation to Home, Roofing Materials, Construction Materials, Services, Contact us, About Us and Blog.
- Footer on every page: address block, phone, email, repeated seven-page navigation, `Follow us` heading with a graphic but no clearly exposed social profile link, HMART name, copyright and `/sitemap.xml` link.
- Source contact data is inconsistently formatted. The replacement normalises it to: **Mangalapuram, Thonnakkal, Thiruvananthapuram, Kerala 695317**; **+91 79944 40164**; **hmartbuildingsolutions@gmail.com**.
- Source page titles are present on all seven pages. Only Roofing Materials exposes a non-empty meta description in the fetched HTML. All pages reuse the same uploaded logo as their Open Graph image.

## Page-by-page inventory

### 1. Home — `/`

Source: <https://www.hmartbs.com/>

1. Hero: “Elevate Your Dream With Elegance”; heading introducing premium roofing and building solutions; supporting line about materials, installation and service; `Read more` links to Contact.
2. “What we deal” introduction: roofing and construction products supported by consultation, installation and project support.
3. Roofing Products: names UPVC sheets, GI sheets, tile-profile sheets, stone-coated tiles, asphalt shingles, polycarbonate sheets and wall cladding; mentions residential, commercial, industrial and agricultural uses.
4. Construction Products: names AAC blocks, cement, steel/TMT bars, wall cladding, flooring, plywood/boards, doors/windows, waterproofing products, tiles/sanitary ware and other building materials.
5. Services: names site inspection/consultation, roofing supply, installation, renovation/replacement, cladding installation, waterproofing and material sourcing.
6. “Why choose HMART?”: product guidance, site inspection and workmanship/customer-satisfaction claims.
7. Footer/contact inventory as described globally.
8. Visible stock photograph: Unsplash construction-site image; it is not identified as an HMART project on the source.

Metadata: title `Home - Hmart Building Solutions`; no non-empty source meta description found; shared logo Open Graph image.

### 2. Roofing Materials — `/roofing-materials`

Source: <https://www.hmartbs.com/roofing-materials>

1. Heading: Roofing & Cladding Materials.
2. Intro claims premium-quality materials, manufacturer warranties and long-lasting performance.
3. Ten product entries with uploaded images and descriptions: Shingles; Stone Coated; Tile Profile Sheet; “PUFF Sheet” (intended **PUF Roofing Sheet**); UPVC Sheet; Trafford Profile Sheet; Cladding Sheet; Decking Sheet; Cement Panel; Cement Board.
4. Video: premium cladding profile sheet — YouTube ID `eXbYDgi_2Ao`; source button points to Contact.
5. Video: stone-coated metal roofing sheet — YouTube ID `1gbiUysyBx0`; source button points to Contact.
6. Third uncaptioned/hidden-content video — YouTube ID `L65SqGdSMwI`; source model calls it “Welcome to our website” and supplies no public description.
7. Footer/contact inventory.

Metadata: title contains a duplicated space (`Roofing  Materials`); meta description repeats the unconfirmed warranty/performance claim; shared logo Open Graph image.

### 3. Construction Materials — `/construction-materials`

Source: <https://www.hmartbs.com/construction-materials>

1. Heading and general range introduction.
2. Seven product entries with uploaded images: Hollow Bricks; AAC Bricks; Country Bricks; TMT Bars; Casuarina Pole; Construction Aggregate; Cements.
3. **Content error:** Hollow Bricks contains the Shingles description.
4. **Content error:** AAC Bricks contains a Hollow Bricks description. The AAC video section identifies AAC as Autoclaved Aerated Concrete but does not provide the missing product-card copy.
5. “Construction Aggregate” describes construction sand rather than the broader aggregate category.
6. AAC video — YouTube ID `Xhk8XPYO1So`; title claims “Build smarter, stronger & greener”.
7. Footer/contact inventory.

Metadata: title present; no non-empty source meta description found; shared logo Open Graph image.

### 4. Services — `/services`

Source: <https://www.hmartbs.com/services>

1. Intro: complete roofing, material-supply and installation services from selection through completion.
2. Roofing Services: site inspection, material selection, installation and maintenance.
3. Construction Services: planning, supply, execution and project support.
4. “Water Proofing”: roofs, terraces, walls, bathrooms, basements and water tanks.
5. “Planing and Documentations”: planning, drawings, approvals and documentation.
6. Footer/contact inventory.

Metadata: title present; no non-empty source meta description found; shared logo Open Graph image.

### 5. Contact Us — `/contact-us`

Source: <https://www.hmartbs.com/contact-us>

1. Address block: HMART Building Solutions, Mangalapuram, Thonnakkal, “Triavndrum”, India. The main block omits the postal code.
2. Phone: `917994440164` without international formatting.
3. Email: `hmartbuildingsolutions@gmail.com`.
4. Footer repeats the address and adds `695317`.
5. No enquiry form or map link is present on the source page.

Metadata: title present; no non-empty source meta description found; shared logo Open Graph image.

### 6. About Us — `/about-us`

Source: <https://www.hmartbs.com/about-us>

1. Intro: HMART is a sister concern of Kooraveettil Agencies, Kooraveettil Builders and Kooraveettil Paints.
2. Range summary: stone-coated sheets, shingles, UPVC, tile profiles, “puff” sheets, cladding, decking, cement boards, AAC blocks, TMT bars, construction sands and other materials.
3. Service summary: planning, material selection, installation and project support.
4. Mission: materials combining durability, innovation and affordability, plus service/customer-focus language.
5. Vision: become a trusted provider recognised for quality, innovation and customer satisfaction.
6. Footer/contact inventory.

Metadata: title present; no non-empty source meta description found; shared logo Open Graph image.

### 7. Blog — `/blog`

Source: <https://www.hmartbs.com/blog>

- No visible blog heading, categories, post cards, post titles, dates, excerpts or article links.
- The page consists only of the global header and footer.
- The builder source references a generic `/blog/post` template and three Unsplash placeholder images, but no published posts were found. These are not migrated as articles.

Metadata: title present; no non-empty source meta description found; shared logo Open Graph image.

## Product inventory

| Product | Source | Migration decision |
|---|---|---|
| Roofing shingles | `/roofing-materials` | Roofing page, migrated with source-uploaded image and corrected editorial copy. |
| Stone-coated roofing | `/roofing-materials` | Roofing page and retained source video. |
| Tile-profile sheets | `/roofing-materials` | Roofing page. |
| PUF roofing sheets | `/roofing-materials` | Roofing page; corrected from “PUFF”. |
| UPVC roofing sheets | `/roofing-materials` | Roofing page. |
| Trafford-profile sheets | `/roofing-materials` | Roofing page. |
| Cladding sheets | `/roofing-materials` | Roofing page under Cladding & Panels. |
| Decking sheets | `/roofing-materials` | Roofing page under Cladding & Panels. |
| Cement panels | `/roofing-materials` | Roofing page under Cladding & Panels. |
| Cement boards | `/roofing-materials` | Roofing page under Cladding & Panels. |
| GI roofing sheets | `/` only | Added to Roofing with a transparent “confirm options/availability” note; no invented specification. |
| Polycarbonate roofing sheets | `/` only | Added to Roofing with a transparent “confirm options/availability” note; no invented specification. |
| Hollow bricks | `/construction-materials` | Construction page; erroneous shingles copy removed and uncertainty flagged. |
| AAC bricks/blocks | `/construction-materials`, `/`, `/about-us` | Construction page; corrected identity, retained AAC video, no invented technical specification. |
| Country bricks | `/construction-materials` | Construction page. |
| TMT bars | `/construction-materials`, `/`, `/about-us` | Construction page. |
| Casuarina poles | `/construction-materials` | Construction page. |
| Aggregates/construction sand | `/construction-materials`, `/about-us` | Construction page; wording clarifies that the source card actually describes sand. |
| Cement | `/construction-materials`, `/` | Construction page. |
| Flooring materials | `/` only | “Additional categories listed on Home” section; exact range awaits confirmation. |
| Plywood & boards | `/` only | Additional-categories section; exact range awaits confirmation. |
| Doors & windows | `/` only | Additional-categories section; exact range awaits confirmation. |
| Waterproofing products | `/` only | Additional-categories section and Services link; exact range awaits confirmation. |
| Tiles & sanitary ware | `/` only | Additional-categories section; exact range awaits confirmation. |

## Service inventory

| Service | Source URL(s) | New location |
|---|---|---|
| Site inspection & consultation | `/`, `/services` | Home, Services, Contact enquiry options. |
| Product/material guidance | `/`, `/services`, `/about-us` | Home and Services. |
| Roofing material supply | `/`, `/services` | Services and enquiry options. |
| Roofing installation | `/`, `/services`, `/about-us` | Services and enquiry options. |
| Roof maintenance | `/services` | Services. |
| Roof renovation/replacement | `/` | Services and enquiry options. |
| Wall-cladding installation | `/` | Services. |
| Construction material sourcing/supply | `/`, `/services` | Services and enquiry options. |
| Construction execution/project support | `/services` | Services, with scope-confirmation language. |
| Waterproofing | `/`, `/services` | Services and enquiry options. |
| Planning, drawings, approvals & documentation | `/services`, `/about-us` | Services, with exact deliverables marked for confirmation. |

## Asset inventory

### Brand assets

- Exact compact source logo/favicon: `https://storage.googleapis.com/production-bigrock-v1-0-2/062/1963062/dSxU2BAp/5f7e66319342471d99521f1884456862` — already present as `assets/hmart-logo-original.png`.
- Exact horizontal source logo: `https://storage.googleapis.com/production-bigrock-v1-0-2/062/1963062/dSxU2BAp/effa566422614712a3741468718e9381` — migrated as `assets/hmart-logo-source.png` and used without a white backing plate.
- Additional large Home upload: `https://storage.googleapis.com/production-bigrock-v1-0-2/062/1963062/dSxU2BAp/f49f539c4e3e4665afca8018db0f9a17` — 8.6 MB; not migrated into the interface pending confirmation of its intended role.

### Roofing product uploads

The ten source uploads are migrated locally under `assets/products/` in the same order as the source cards:

1. Shingles — `1059a7fa6760482fb18c35e549a99813`
2. Stone-coated — `a33ca5bfc6b146de975e0f9f36c8dd9e`
3. Tile profile — `2376b3508eac42f495c8b49ced90838a`
4. PUF — `eaff7dce7a794049b6ccbb048e19665b`
5. UPVC — `4452a258d5484e91af531486d17cf1d5`
6. Trafford profile — `5c6ab7d2353449b4933a4c30fabcf231`
7. Cladding — `6fdc31b4071f4fd4be117feb18cee3b3`
8. Decking — `f518cfb085fe48ac866f8ad1a0959508`
9. Cement panel — `29692ae847b946febcc31b20abf862a9`
10. Cement board — `2b8e7d9105f44a73bb633541d4698b0c`

### Construction product uploads

1. Hollow bricks — `8e9996b88bd64873abd5fa356e0bed82`
2. AAC bricks — `53887425cc9b457687d4cf0cc796ce6c`
3. Country bricks — `22658a258a0e40c8b43ba97f4d12640b`
4. TMT bars — `f8b19b0622884469933d93605a5514b0`
5. Casuarina poles — `22cc148c5935414a8a90128c50afed92`
6. Construction sand — `eaa9e93b965f484d815fc0d8cd77f9db`
7. Cement — `d1883511df044311b29549aa3f0a29ff`

### Video embeds

- Cladding profile sheet: <https://www.youtube.com/watch?v=eXbYDgi_2Ao> — retained on Roofing.
- Stone-coated metal roofing: <https://www.youtube.com/watch?v=1gbiUysyBx0> — retained on Roofing.
- Uncaptioned third Roofing embed: <https://www.youtube.com/watch?v=L65SqGdSMwI> — not presented as product evidence until HMART confirms its subject and intended caption.
- AAC bricks: <https://www.youtube.com/watch?v=Xhk8XPYO1So> — retained on Construction.

### Stock imagery referenced by the source

- Home uses several Unsplash references, including `photo-1609867271967-a82f85c48531`, `photo-1504307651254-35680f356dfd`, `photo-1589939705384-5185137a7f0f` and others embedded in the builder model.
- Roofing background: `photo-1654848232800-20fbc9cdbc10`.
- Construction background: `photo-1609867271967-a82f85c48531`.
- Services references five Unsplash photos, including `photo-1504307651254-35680f356dfd` and `photo-1603901622056-0a5bee231395`.
- Contact references `photo-1468500428914-59a49bceb33c`.
- About references five Unsplash images.
- Blog model contains three generic Unsplash placeholders but no posts; they are not treated as editorial content.
- Any stock image used in the replacement is explicitly labelled **Illustrative stock photography** and is never presented as an HMART project.

## Issues, conflicts and confirmation list

1. Hollow Bricks has copied shingles text; removed and flagged.
2. AAC Bricks has a Hollow Bricks description; corrected only to the verified product identity, with specifications left unclaimed.
3. `PUFF` should be `PUF`.
4. `PLANING AND DOCUMENTATIONS` should be `Planning & Documentation`.
5. `WATER PROOFING` is standardised to `Waterproofing`.
6. `Triavndrum` is corrected to `Thiruvananthapuram`; `695317` is restored consistently.
7. Source title has a double space in `Roofing  Materials`.
8. “what we deal..” has inconsistent capitalisation/punctuation.
9. Home-only categories have no dedicated product copy or images. They are retained in an explicitly labelled additional-category section rather than silently discarded.
10. Source product `Read more` links point to an internal builder target `page:gallery`; no public `/gallery` route exists. Replaced with direct product-to-enquiry links.
11. Video `L65SqGdSMwI` has no visible source caption or description and needs confirmation.
12. The source Blog is empty. No articles were invented.
13. The footer shows `Follow us` but no confirmed social profile URL was exposed. No social links were invented.
14. Claims requiring owner confirmation before stronger marketing use: manufacturer warranties; exact warranty terms; “experienced team”; “timely delivery”; superior load/thermal/sound/moisture performance; energy efficiency; affordability; sustainability/“greener”; and any assertion that a stock image depicts HMART work.
15. The source alternates between “Kooraveettil Group” and three named sister concerns. Confirm whether **Kooraveettil Group** is the preferred legal/brand umbrella.
16. Confirm whether planning support includes statutory approvals or only document preparation/coordination.

## Migration checklist

- [x] Global logo, contact data, seven-page navigation and footer migrated.
- [x] Home hero, product-category introduction, services, enquiry reasons and clear page links rebuilt.
- [x] Ten Roofing-page products migrated with their uploaded images.
- [x] GI and polycarbonate products retained from Home with transparent confirmation notes.
- [x] Seven Construction-page products migrated with uploaded images.
- [x] Five additional Home-only construction categories retained without invented product details.
- [x] Roofing, construction, waterproofing, planning/documentation, inspection, supply, installation and renovation scopes consolidated on Services.
- [x] Contact details normalised; call, email, map and WhatsApp-review flow added.
- [x] Sister concerns, background, mission and vision moved to About.
- [x] Empty Blog replaced by an intentional, accessible empty state.
- [x] Relevant cladding, stone-coated roofing and AAC videos retained with non-autoplay embeds.
- [x] Uncaptioned video and uncertain claims documented for owner review.
- [x] Page-specific titles/descriptions, structured data, sitemap and robots file added.
