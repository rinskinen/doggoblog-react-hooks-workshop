import React from 'react';
import './Blog.css';
import Footer from './Footer';
import DoggoIcon from './DoggoIcon';

function BlogPost() {
    return (
        <div className="blog">
            <h1 className="maintitle">DoggoBloggo</h1>
            <time>Today iz: {new Date().toLocaleDateString()}</time>

            <h2>The doggo of the month</h2>
            <p>
                <img src="https://i.imgflip.com/2z54bu.jpg" className="blog-image-fluffy" alt="fluffy-dog"></img>
            </p>
            <p>
                Doggo ipsum most angery pupper I have ever seen big ol pupper you are doing me the shock fluffer heckin
                I am bekom fat heck boofers, long woofer pupperino blop pupper ruff. Heck waggy wags you are doin me a
                concern very good spot vvv fluffer big ol, wow very biscit pupper very good spot smol. Dat tungg tho
                stop it fren many pats super chub pupperino h*ck, big ol pupper fat boi wow very biscit wrinkler smol,
                very hand that feed shibe super chub puggo vvv. borkf heckin good boys and girls big ol. Very good spot
                boofers h*ck wow such tempt, yapper. Fat boi you are doing me a frighten you are doing me the shock
                noodle horse borkdrive extremely cuuuuuute, shoober long woofer I am bekom fat long water shoob, vvv
                clouds doggorino clouds. Fluffer what a nice floof lotsa pats maximum borkdrive, doggorino. wrinkler
                puggo. Wow very biscit very taste wow lotsa pats very jealous pupper corgo h*ck, blop you are doing me
                the shock shibe.
            </p>
            <DoggoIcon />
            <p>
                Pupperino heck corgo pupperino maximum borkdrive long woofer, puggo doggorino fat boi heckin. He made
                many woofs wow such tempt noodle horse yapper, adorable doggo borking doggo. Stop it fren what a nice
                floof pats he made many woofs, smol borking doggo with a long snoot for pats shoob. noodle horse shibe
                long bois. Much ruin diet very jealous pupper floofs doge shibe, h*ck dat tungg tho fat boi.
            </p>
            <DoggoIcon />
            <p>
                Heckin good boys wrinkler doge bork boof, most angery pupper I have ever seen length boy. Heckin wow
                such tempt most angery pupper I have ever seen fluffer clouds, you are doin me a concern woofer. Borkf
                shoob corgo what a nice floof, big ol thicc. You are doing me the shock long woofer noodle horse wow
                very biscit snoot, borking doggo shooberino heck ur givin me a spook shoob, boofers big ol clouds. Blop
                very taste wow maximum borkdrive shooberino you are doing me a frighten, heckin angery woofer big ol
                doing me a frighten. Long bois borking doggo length boy lotsa pats corgo noodle horse, fluffer length
                boy puggo.
            </p>
            <DoggoIcon />
            <blockquote cite="https://askdoggo.com/category/dog-food/" className="blog-blockquote">
                <h3>If Not Pork, What Can Dogs Eat Instead?</h3>
                <p>
                    If you don’t want to feed your dog dog food but you decide that pork is unsuitable, what
                    alternatives exist? The good news is that leaner poultry meats are ideally suited for dogs to eat.
                    Chicken and turkey both tend to be great protein sources for dogs, and can be fed to dogs in
                    conjunction with rice for a healthy foundation for a dog’s diet. Like with pork, it’s important to
                    cook chicken or turkey thoroughly and avoid using seasonings and spices. Plain meat is more than
                    good enough for your dog. The only other thing to keep in mind if you’re avoiding dog food is that
                    your dog may end up missing certain vitamins and minerals if you don’t supplement their diet. In the
                    In the wild, dogs and other carnivorous animals eat organs which are rich in certain nutrients.
                    Feeding your dog solely on boneless, skinless chicken breasts and rice won’t meet all those needs.
                    You can find vitamin supplements that will give your dog all the additional vitamins they need to be
                    healthy.
                </p>
            </blockquote>
            <Footer />
        </div>
    );
}

export default BlogPost;
