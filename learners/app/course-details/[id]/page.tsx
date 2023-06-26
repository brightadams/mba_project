import Button from "@/app/Button";
import CourseDetailsSection from "@/app/CourseDetailsSection";
import ExpandableText from "@/app/ExpandableText";
import {
  CheckCircleIcon,
  StarIcon,
  BookOpenIcon,
  ClockIcon,
  MicrophoneIcon,
  DocumentTextIcon,
  Square3Stack3DIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const CourseDetails = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex w-full px-1 lg:px-5">
      <div className="grid lg:grid-cols-3 pt-7 mb-6">
        <div className="lg:col-span-2 mx-2 lg:mx-5">
          <span className="flex flex-col text-3xl lg:text-5xl font-extrabold dark:text-white">
            Adobe XD Basic to Advance: Web Design
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-4">
            <div className="flex items-center">
              <StarIcon className="h-4 w-4 cursor-pointer text-yellow-500 mr-2 lg:mr-5" />
              <span className="text-sm font-extrabold">4.5</span>
              <span className="text-xs font-extralight">(1,234 Reviews)</span>
            </div>
            <div className="flex  items-center">
              <BookOpenIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-2 lg:mr-5" />
              <span className="text-sm font-bold">Lessons: 16</span>
            </div>
            <div className="flex  items-center">
              <BookOpenIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-2 lg:mr-5" />
              <span className="text-sm font-bold">Assignments/Tests: 2</span>
            </div>
            <div className="flex  items-center">
              <ClockIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-2 lg:mr-5" />
              <span className="text-sm">2hrs 10min</span>
            </div>
          </div>
          <div className="mt-3 w-full h-96 relative">
            <Image alt="course-image" src="/course-image.jpg" fill />
          </div>
          <div className="mt-4">
            <CourseDetailsSection title="About Page">
              <ExpandableText max={500}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                sit enim rem eaque doloremque, expedita officia aliquam nam
                accusantium, veritatis omnis explicabo. Distinctio a assumenda,
                voluptatibus sit culpa blanditiis. Autem! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Suscipit deserunt ea culpa.
                Soluta velit ex nisi deserunt consequatur, pariatur expedita
                vitae asperiores libero voluptatibus officiis, minus, laborum in
                odio amet. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Dolorem sequi magnam architecto ipsum est illum optio nisi
                minima dolores sapiente! Voluptas quas deleniti ipsam, laborum
                recusandae veritatis sunt nostrum adipisci. Saepe atque
                inventore placeat, corrupti tenetur repudiandae! Consectetur ex
                magni, praesentium mollitia consequatur dicta veritatis, ad
                quisquam, fugiat dignissimos sequi quidem dolorum rem dolorem
                alias. Exercitationem ab facilis soluta quam. Rerum velit quae
                illo incidunt, laboriosam autem expedita at? Ipsam dolorem, enim
                fuga nisi cumque magni quasi atque, eum error at temporibus
                autem rem eius doloribus veniam suscipit, voluptatem est. Atque
                aliquam maiores dolor tenetur perspiciatis cumque consequatur
                natus nulla expedita accusamus sed recusandae modi doloribus
                amet, exercitationem repellat laudantium corporis corrupti
                architecto? Voluptatibus possimus nobis maxime officiis
                consequuntur voluptatum. Eum animi inventore blanditiis ducimus
                fugiat corrupti eius illo. Iste aliquid minus, alias odio
                veritatis molestiae quidem nobis ipsum nostrum ullam dolore
                explicabo aut magnam porro, necessitatibus laboriosam recusandae
                similique. Et necessitatibus, minus quia velit labore maxime
                accusamus consequatur temporibus, a, facere atque quae? Fugit
                quos facere debitis quam beatae delectus eos tempore ullam
                aperiam unde quo, minus harum atque! Ab dolorem maxime similique
                eius culpa eligendi neque enim atque blanditiis suscipit
                reiciendis excepturi consequatur quae magnam vel, pariatur esse
                amet nulla delectus. Culpa repellat harum eum atque quaerat
                assumenda. Eum atque a exercitationem ab nam provident porro cum
                laudantium cumque velit aperiam est, quae modi deserunt repellat
                nulla alias. Vel praesentium ullam adipisci ea similique, saepe
                temporibus facilis quibusdam! Cupiditate, consectetur, aliquid a
                ducimus inventore laborum, labore voluptatum quidem molestiae
                assumenda perferendis impedit! Animi quod magni, quos iusto
                impedit consequuntur delectus doloremque. Id deserunt nobis,
                quod earum dicta atque. Recusandae minus beatae accusamus
                voluptates repellendus vel inventore voluptas ut nostrum
                consequatur alias, maxime voluptatum nisi nemo, veritatis
                itaque, facere a maiores ad error ducimus! Laborum cum corrupti
                reiciendis id! Expedita incidunt voluptates possimus fugit cum
                reiciendis neque iure amet enim quidem, nobis ipsa consequatur?
                Mollitia deserunt tempora eaque enim ducimus distinctio. Minima
                vitae illum fugiat quia ad perspiciatis maiores. Aut deleniti
                doloremque ratione deserunt labore, aliquam ea nisi atque,
                officia quam explicabo sapiente assumenda accusamus corrupti
                alias ex quasi quo est, ipsum facilis neque. Non minima dolores
                earum ea! Debitis laboriosam tempore incidunt cupiditate
                sapiente nemo doloribus quae veritatis accusantium quis
                recusandae rem voluptas sit, ea suscipit deleniti error quo
                sequi omnis reprehenderit. Nemo cum blanditiis consectetur
                laudantium tempora! Sint, accusantium aspernatur tempore aperiam
                autem, itaque asperiores quibusdam minus incidunt neque
                accusamus et pariatur vel cumque illo maiores nostrum voluptatem
                inventore magnam architecto magni rerum? Dolorem provident velit
                veritatis. At magnam natus earum quis nobis, asperiores nihil
                fuga, quae facere ab suscipit alias sed sequi vel accusamus
                dolor ducimus impedit nulla quos consectetur. Saepe doloremque
                repudiandae aperiam optio. Ratione. Consectetur omnis, quod
                molestias illum, obcaecati ipsam maxime laudantium a et
                voluptates dolor beatae, labore facilis! Illo optio molestiae,
                nam fugiat quaerat eius nobis eos! Dicta quam doloremque non
                voluptatem? Praesentium assumenda deserunt est molestias
                laboriosam cupiditate, expedita quos veniam aliquid magnam,
                tempora voluptatem! Ipsam facilis eos tenetur quasi at sit
                recusandae reiciendis minima inventore, tempora ea sed eius
                molestiae. Expedita, aliquam quibusdam sint eius quis, laborum
                libero ducimus, exercitationem officia soluta fugit esse nam ad.
                Fugiat architecto tenetur alias aut, illo fuga aspernatur
                repellat, iste ipsa eum dolore cum. Eaque, excepturi. Molestias
                nihil magnam accusantium, odit velit veniam dicta repellendus
                aliquid veritatis, explicabo, totam harum saepe earum sapiente.
                Dolorum rerum tenetur expedita reprehenderit tempore mollitia
                accusantium aliquid possimus praesentium! Tempora, officiis
                provident molestias explicabo facilis eos cum, cumque maxime
                cupiditate velit aliquid vel esse. Iste quos assumenda sapiente
                soluta reiciendis aut, hic dicta quia alias praesentium? Eum,
                alias ut. Est, distinctio non reprehenderit officiis voluptatem
                doloribus at alias inventore. Suscipit nulla a atque quidem
                ratione perferendis fugit explicabo! Harum sequi exercitationem
                accusamus corporis, fugit debitis maiores enim iusto sed.
                Aliquid commodi fugiat quos quisquam vero, consequuntur odio eos
                numquam sequi laborum? Facere eveniet reprehenderit obcaecati
                rem itaque officia, aperiam facilis aspernatur fuga maxime aut
                quam, natus voluptatibus dolores sequi? Eveniet ipsum in facilis
                repellat, quos commodi expedita inventore at praesentium
                voluptatem saepe ratione unde magni accusamus, sed recusandae
                molestias fuga? Corrupti ipsum atque beatae quis iusto neque et
                iure! Ea cum laboriosam nobis asperiores iusto voluptatem quam
                magni, accusantium sapiente vitae dolorem id perferendis nihil
                voluptate maiores explicabo ducimus reiciendis commodi
                doloremque fugit animi blanditiis eos distinctio! Neque, modi.
                Labore voluptatibus dignissimos doloremque nisi fuga ipsam porro
                doloribus hic optio reiciendis odio quaerat, adipisci libero,
                provident tempore facilis dolor error expedita non vel natus
                neque. Sapiente sit harum praesentium? Blanditiis corrupti, illo
                quos ea nobis ut natus adipisci tempora earum omnis tempore cum
                alias quo repudiandae nemo saepe dolorum voluptate minima
                eveniet suscipit atque minus? Repellat laudantium voluptatum
                exercitationem? Repellat eligendi nostrum, eaque temporibus
                labore veritatis aliquid. Deleniti, similique eaque fugit veniam
                quos, quia tenetur dicta quis perferendis recusandae aliquam
                ipsam consectetur exercitationem nemo voluptatum beatae?
                Aperiam, quas autem! Repellendus quam ratione accusamus quis
                tenetur mollitia sequi architecto, repellat, nulla facilis
                impedit voluptatibus incidunt! Aut quis eaque aspernatur impedit
                dicta rerum quibusdam, eligendi ipsum aliquid odit ab,
                praesentium laudantium? Magni quo tempore consequatur est
                incidunt pariatur doloremque reiciendis voluptates laudantium!
                Quod possimus perferendis sequi quidem atque hic, ab non, harum,
                dolorem rerum alias est rem voluptas dignissimos amet veritatis?
                Voluptatum neque veniam cupiditate corrupti error nemo unde
                doloribus voluptatibus! Beatae deserunt eius saepe quidem, amet
                quo a ducimus itaque eum similique esse. Harum nemo ad nulla
                ipsa earum facilis. Accusantium, modi. Ducimus atque
                consequuntur dolorem molestiae illum vitae quaerat, adipisci
                voluptas a, est deleniti omnis ut earum totam dolore sint,
                dignissimos cupiditate maiores odit quos. Doloremque saepe
                numquam velit. Totam, enim ullam! Officia sit vel maxime autem
                reprehenderit mollitia totam esse quo, minima explicabo
                quibusdam perspiciatis corrupti nihil sapiente commodi id
                voluptas ipsum, saepe excepturi et accusamus odio vero. Numquam
                pariatur nobis incidunt, nulla facere ullam tempore! Laudantium
                velit accusamus, itaque fugiat impedit aspernatur obcaecati
                fugit a repellat molestias officiis pariatur error temporibus
                consequatur quaerat veniam reiciendis minima aliquid? Quam sunt
                officia magni provident quod reprehenderit ipsam iusto
                blanditiis dolore a, molestias, ex quae, rerum porro et?
                Facilis, pariatur! Tenetur cumque vel omnis eveniet blanditiis
                reiciendis sapiente architecto iusto? A, dignissimos accusamus,
                quam exercitationem beatae nulla porro reiciendis aspernatur
                consequuntur laudantium veritatis impedit ut incidunt obcaecati
                corrupti ex adipisci vitae delectus natus architecto commodi eum
                perferendis. Itaque, iusto debitis! Fugiat repudiandae officia
                eaque laudantium error libero similique possimus ex enim ullam
                vel asperiores veritatis quos amet natus nisi est nesciunt
                nostrum, numquam corrupti ipsam sapiente deleniti tenetur cum?
                Id. Delectus, excepturi quaerat! Reiciendis possimus quod
                doloribus in alias, vel dignissimos adipisci cumque eaque quia
                cum mollitia saepe facere eveniet, esse voluptatem illo earum
                provident at quae ex. Dolorum, harum. Voluptatum et doloribus
                impedit! Earum magnam vero pariatur libero et explicabo unde
                sapiente officia! Error quisquam recusandae cumque est, dolorem
                rerum optio animi non in quibusdam blanditiis architecto
                voluptatibus reiciendis! Commodi voluptas est, culpa
                perspiciatis et sunt placeat deleniti aperiam dolorum ab eos
                quam eius quo eum cupiditate nemo quos autem tempora fugiat
                omnis maiores architecto, magnam rem. Est, doloribus? Laborum
                accusantium fugiat repudiandae repellat debitis voluptatem
                reiciendis, consectetur quasi nisi, ad corrupti nemo ullam fugit
                dignissimos praesentium odio eligendi libero, similique impedit.
                Neque laudantium cupiditate, quis earum error architecto.
                Doloribus praesentium eaque atque sint debitis eius sequi
                voluptatum, deleniti necessitatibus quasi tenetur molestias,
                accusantium minus amet officia reiciendis consequatur delectus
                animi ab. Voluptate, nesciunt harum qui eum sequi debitis. Rem
                perferendis veniam, voluptas provident consectetur adipisci
                veritatis sequi a distinctio molestiae corporis odio iste,
                doloremque fugit, dignissimos inventore commodi pariatur quo
                illum doloribus. Mollitia aut neque adipisci odio sit? Rem sunt
                numquam ea a possimus unde odio nobis vero. Enim deserunt cum
                molestiae ipsa, dignissimos tempore unde blanditiis iure amet in
                soluta beatae, doloribus eligendi ipsum id, dolorum esse. Optio
                cum unde rem possimus, ipsam molestias perferendis quo suscipit
                et aperiam, iure ex obcaecati, error aliquam dolores. Natus
                quisquam facilis modi ullam pariatur iure et nulla a dignissimos
                deserunt. Hic officia tenetur, dolores quod, libero dolorem
                praesentium quaerat ut veniam ullam doloribus enim tempora
                facere illo illum aspernatur quisquam est aperiam vitae animi
                quae mollitia voluptatibus. Quaerat, quis rem? Ad delectus
                maxime beatae veritatis molestias quia? Illum quod amet vero a
                impedit, obcaecati quaerat sapiente aliquid perferendis odio
                reiciendis nobis maxime quae sequi ea dolorem totam facere
                magnam. Autem. Ducimus, repudiandae tempore a ipsum obcaecati
                ipsa repellat culpa numquam error nobis iste nisi maiores
                expedita repellendus quas placeat voluptatum rerum
                exercitationem cumque dolorum, fuga, aliquid earum quibusdam
                enim. A. Perspiciatis, laudantium praesentium id debitis iure
                nam, dignissimos, atque velit temporibus aliquam consequuntur
                possimus. Laborum dolorem minus, quasi tempora accusantium totam
                reiciendis beatae alias fugit eum iure est cupiditate placeat.
                Obcaecati, suscipit! Commodi velit deleniti, incidunt mollitia
                delectus ipsum quos tenetur dolores pariatur alias suscipit
                similique modi consequatur quis a, inventore autem, molestiae
                reprehenderit iste ex beatae. Neque, maxime repellendus?
                Eligendi quam voluptate animi odio distinctio ducimus, porro,
                necessitatibus doloribus ex reprehenderit ad, hic fuga magni
                dicta? Nisi aliquam magni, totam, facere molestiae esse ad omnis
                vero eligendi quibusdam harum! Minus facilis possimus et
                recusandae, est maxime eveniet ipsam nemo iste velit modi hic,
                consequatur, magnam accusantium dignissimos vitae. Est, labore.
                Dicta, deleniti dolore quo delectus doloremque velit commodi
                incidunt. Magni, fugiat quasi. Esse alias eligendi sequi
                accusamus molestias provident, quo suscipit asperiores repellat
                iusto blanditiis adipisci totam numquam aspernatur nostrum
                accusantium voluptatum placeat consequuntur facere fuga. Quidem,
                vel optio! Minus asperiores incidunt porro officia, aliquam,
                itaque dignissimos voluptates deserunt nemo illum praesentium
                magni ipsa necessitatibus ea quibusdam corrupti eos dolorum
                eligendi voluptate exercitationem id harum temporibus quae!
                Aliquid, aliquam? Ut, autem quisquam repudiandae non soluta
                tenetur. Laudantium ex modi tempore reiciendis? Nam omnis enim
                similique accusantium cum rerum, nisi ea ipsa sapiente commodi
                quod necessitatibus exercitationem sint perferendis dolorem!
                Ullam voluptas quod esse eius illum accusantium odit amet
                veritatis voluptate deleniti? Quibusdam similique maxime
                consectetur commodi ipsum? Itaque harum nesciunt in. Nisi
                veritatis inventore magni quas delectus corporis beatae.
                Delectus incidunt, illo odio deleniti ex amet hic, ratione
                perspiciatis minima soluta excepturi laboriosam nam ipsam. Sit
                dignissimos eaque expedita fugit consequatur odio illo deserunt
                itaque, nihil vel quae nemo. Ex facere incidunt cumque vel
                laboriosam, adipisci in omnis, quae nam deserunt dicta sed illum
                sequi dolorum inventore provident, nostrum ad. Commodi,
                reiciendis natus numquam nesciunt delectus tempora earum soluta.
                Rerum tenetur ex eos impedit a facere veritatis et sit ipsam, id
                ducimus natus eaque expedita tempore! Similique delectus
                possimus, voluptate aperiam quam nostrum nihil quo, modi dicta
                officia expedita. Ducimus dolore omnis architecto dolor ex,
                sequi eos ea ab aliquid, laboriosam tempore possimus minus
                quidem vero, dicta doloribus. A eum inventore ab beatae,
                reprehenderit ex doloribus accusamus esse quaerat! Reprehenderit
                amet laboriosam maxime qui, illum quam enim a corporis fugit
                earum velit. Et similique asperiores beatae pariatur? Distinctio
                ad inventore nam accusamus eveniet vitae eum voluptas
                exercitationem sequi libero. Esse, ut obcaecati. Debitis
                deleniti nulla aperiam cum voluptate adipisci, eum accusamus
                eius earum commodi pariatur nam. Dolorum veritatis, hic officia
                exercitationem enim eum nostrum? Tempore non doloremque expedita
                optio. Adipisci quo corporis vitae exercitationem. Commodi,
                dignissimos odio fugit soluta debitis mollitia ratione optio.
                Exercitationem iste hic nihil cumque dolore nulla ducimus
                delectus labore consequatur blanditiis ut, corrupti quasi est.
                Autem perferendis suscipit architecto tempora ea tenetur. Esse
                voluptates quas veniam cumque reiciendis quia sequi ab porro?
                Officiis, dicta repellat et sapiente expedita corrupti saepe,
                possimus a deleniti aut nulla. Tenetur sit qui velit distinctio
                nam voluptatibus. Nulla sed vitae sint temporibus doloribus
                eveniet labore iusto corrupti ipsum expedita, adipisci
                architecto eum consectetur suscipit nihil cumque odit quos
                laborum quod. Voluptas, quibusdam maiores. Cupiditate at, amet
                non in quas asperiores velit. Nemo quae quidem quaerat illum,
                ratione hic quo iusto inventore quam libero unde aperiam ad
                maxime dolore sit architecto! Ex possimus repudiandae obcaecati
                quae commodi tempora, doloremque autem molestias quibusdam quod?
                Vitae, nihil? Quis obcaecati, vero asperiores pariatur, debitis
                sequi eaque, cumque magni molestiae porro iusto at autem iure!
              </ExpandableText>
            </CourseDetailsSection>
          </div>
          <div className="mt-8">
            <CourseDetailsSection title="After completing this Course you will be able to;">
              <ul>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((skills) => (
                  <div className="flex items-center mb-4" key={skills}>
                    <CheckCircleIcon
                      className="h-4 w-4 cursor-pointer text-blue-700 mr-2"
                      key={skills}
                    />
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                  </div>
                ))}
              </ul>
            </CourseDetailsSection>
          </div>
          <div className="mt-8">
            <CourseDetailsSection title="Requirements">
              <ul>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((skills) => (
                  <div className="flex items-center mb-4" key={skills}>
                    <CheckCircleIcon className="h-4 w-4 cursor-pointer text-blue-700 mr-2" />
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                  </div>
                ))}
              </ul>
            </CourseDetailsSection>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="border-l-2 dark:border-l-gray-600">
            <div className="border-b border-dashed pb-5 dark:border-b-gray-600">
              <div className="flex items-center ml-2 mb-3">
                <MicrophoneIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">English</span>
              </div>
              <div className="flex items-center ml-2 mb-3">
                <DocumentTextIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">
                  Exercises and quizes to help you put what you learn to
                  practice
                </span>
              </div>
              <div className="flex items-center ml-2 mb-3">
                <Square3Stack3DIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">Beginner and Intermediate</span>
              </div>
              <div className="flex items-center ml-2 mb-3">
                <DevicePhoneMobileIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">Access on mobile and desktop</span>
              </div>
              <div className="flex items-center ml-2 mb-3">
                <BoltIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">Lifetime access</span>
              </div>
              <div className="flex items-center ml-2 mb-3">
                <TrophyIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">Certificate on completion</span>
              </div>
            </div>
            <div className="ml-5 my-5">
              <span className="text-2xl text-blue-700">$500</span>
            </div>
            <div className="flex justify-center">
              <Button styles="bg-blue-700 px-7">
                <span className="text-gray-100">Enroll Now</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
