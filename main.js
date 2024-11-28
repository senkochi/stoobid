const appleuk = new Audio();
        appleuk.src = "/audio/apple.mp3";

const antuk = new Audio();
antuk.src = "/audio/ant.mp3";

const alligatoruk = new Audio();
alligatoruk.src = "/audio/alligator.mp3";

        const aliceuk = new Audio();
        aliceuk.src = "/audio/alice.mp3";

        const hiuk = new Audio();
        hiuk.src = "/audio/hi.mp3";

        const hellouk = new Audio();
        hellouk.src = "/audio/hello.mp3";

        const eddieuk = new Audio();
        eddieuk.src = "/audio/eddie.mp3";

        const elbowuk = new Audio();
        elbowuk.src = "/audio/elbow.mp3";

        const egguk = new Audio();
        egguk.src = "/audio/egg.mp3";

        const elephantuk = new Audio();
        elephantuk.src = "/audio/elephant.mp3";

        const isabeluk = new Audio();
        isabeluk.src = "/audio/isabel.mp3";

        const inkuk = new Audio();
        inkuk.src = "/audio/ink.mp3";

        const igloouk = new Audio();
        igloouk.src = "/audio/igloo.mp3";

        const insectuk = new Audio();
        insectuk.src = "/audio/insect.mp3";

        const oliveruk = new Audio();
        oliveruk.src = "/audio/oliver.mp3";

        const octopusuk = new Audio();
        octopusuk.src = "/audio/octopus.mp3";

        const omeletuk = new Audio();
        omeletuk.src = "/audio/omelet.mp3";

        const ostrichuk = new Audio();
        ostrichuk.src = "/audio/ostrich.mp3";

        const bookuk = new Audio();
        bookuk.src = "/audio/book.mp3";

        const balluk = new Audio();
        balluk.src = "/audio/ball.mp3";

        const jumpropeuk = new Audio();
        jumpropeuk.src = "/audio/jumprope.mp3";

        const dolluk = new Audio();
        dolluk.src = "/audio/doll.mp3";

        const umpireuk = new Audio();
        umpireuk.src = "/audio/umpire.mp3";

        const umbrellauk = new Audio();
        umbrellauk.src = "/audio/umbrella.mp3";

        const upsidedownuk = new Audio();
        upsidedownuk.src = "/audio/upsidedown.mp3";

        const balloonuk = new Audio();
        balloonuk.src = "/audio/balloon.mp3";
        
        const bicycleuk = new Audio();
        bicycleuk.src = "/audio/bicycle.mp3";

        const topuk = new Audio();
        topuk.src = "/audio/top.mp3";

        const netuk = new Audio();
        netuk.src = "/audio/net.mp3";

        const bethuk = new Audio();
        bethuk.src = "/audio/beth.mp3";

        const boyuk = new Audio();
        boyuk.src = "/audio/boy.mp3";

        const birduk = new Audio();
        birduk.src = "/audio/bird.mp3";

        const baguk = new Audio();
        baguk.src = "/audio/bag.mp3";

        const oneuk = new Audio();
        oneuk.src = "/audio/one.mp3";

        const twouk = new Audio();
        twouk.src = "/audio/two.mp3";

        const threeuk = new Audio();
        threeuk.src = "/audio/three.mp3";

        const fouruk = new Audio();
        fouruk.src = "/audio/four.mp3";
        
        const fiveuk = new Audio();
        fiveuk.src = "/audio/five.mp3";

        const sixuk = new Audio();
        sixuk.src = "/audio/six.mp3";

        const sevenuk = new Audio();
        sevenuk.src = "/audio/seven.mp3";

        const eightuk = new Audio();
        eightuk.src = "/audio/eight.mp3";

        const nineuk = new Audio();
        nineuk.src = "/audio/nine.mp3";

        const tenuk = new Audio();
        tenuk.src = "/audio/ten.mp3";

        const caroluk = new Audio();
        caroluk.src = "/audio/carol.mp3";

        const caruk = new Audio();
        caruk.src = "/audio/car.mp3";

        const catuk = new Audio();
        catuk.src = "/audio/cat.mp3";
        
        const candyuk = new Audio();
        candyuk.src = "/audio/candy.mp3";

        const daviduk = new Audio();
        daviduk.src = "/audio/david.mp3";

        const doguk = new Audio();
        doguk.src = "/audio/dog.mp3";

        const deskuk = new Audio();
        deskuk.src = "/audio/desk.mp3";
        
        const dinosauruk = new Audio();
        dinosauruk.src = "/audio/dinosaur.mp3";

        const gailuk = new Audio();
        gailuk.src = "/audio/gail.mp3";

        const girluk = new Audio();
        girluk.src = "/audio/girl.mp3";

        const gorillauk = new Audio();
        gorillauk.src = "/audio/gorilla.mp3";
        
        const gameuk = new Audio();
        gameuk.src = "/audio/game.mp3";

        const peteruk = new Audio();
        peteruk.src = "/audio/peter.mp3";

        const peachuk = new Audio();
        peachuk.src = "/audio/peach.mp3";
        
        const penciluk = new Audio();
        penciluk.src = "/audio/pencil.mp3";

        const pictureuk = new Audio();
        pictureuk.src = "/audio/picture.mp3";

        const piguk = new Audio();
        piguk.src = "/audio/pig.mp3";

        const cowuk = new Audio();
        cowuk.src = "/audio/cow.mp3";
        
        const duckuk = new Audio();
        duckuk.src = "/audio/duck.mp3";

        function ques21() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("What's your name?");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }
        function ques22() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("I'm Sam");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }
        function ques23() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("I'm Ginger");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }
        function ques31() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("How are you?");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }
        function ques32() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("I'm fine");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }
        function ques41() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("What is it?");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }
        function ques42() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("It's a book");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }
        function ques52() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("It's a balloon");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }
        function playjim() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("Uncle Jim");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }
        function playgail() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("Gail");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }

        function ques61() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("Let's count!");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }
        function ques62() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("ok  one");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }
        function ques61() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("Let's count!");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);

        }
        function ques72() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("ok  six");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }
        function ques81() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("How many?");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }
        function ques82() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("seven  eight");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }
        function ques91() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("How old are you?");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }
        function ques92() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("I'm seven");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }

        function ques101() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("What are they?");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }

        function ques102() {
            if (!('speechSynthesis' in window)) {
                alert("Speech synthesis not supported.");
                return;
            }
            const utterance = new SpeechSynthesisUtterance("They're dogs");
            utterance.lang = 'en-US'; // Change to 'vi-VN' for Vietnamese
            window.speechSynthesis.speak(utterance);
        }