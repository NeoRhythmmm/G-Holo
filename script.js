// Блок 1: Инициализация, константы и функции создания объектов сцены

// Константы
const projectId = 'YOUR_PROJECT_ID'; // Замените на ваш ID проекта, если используется
const semitones = [
    { f: 16.35, deg: 0, note: "C0" },
    { f: 17.32, deg: 1, note: "C#0" },
    { f: 18.35, deg: 2, note: "D0" },
    { f: 19.45, deg: 3, note: "D#0" },
    { f: 20.60, deg: 4, note: "E0" },
    { f: 21.83, deg: 5, note: "F0" },
    { f: 23.12, deg: 6, note: "F#0" },
    { f: 24.50, deg: 7, note: "G0" },
    { f: 25.96, deg: 8, note: "G#0" },
    { f: 27.50, deg: 9, note: "A0" },
    { f: 29.14, deg: 10, note: "A#0" },
    { f: 30.87, deg: 11, note: "B0" },
    { f: 32.70, deg: 12, note: "C1" },
    { f: 34.65, deg: 13, note: "C#1" },
    { f: 36.71, deg: 14, note: "D1" },
    { f: 38.89, deg: 15, note: "D#1" },
    { f: 41.20, deg: 16, note: "E1" },
    { f: 43.65, deg: 17, note: "F1" },
    { f: 46.25, deg: 18, note: "F#1" },
    { f: 49.00, deg: 19, note: "G1" },
    { f: 51.91, deg: 20, note: "G#1" },
    { f: 55.00, deg: 21, note: "A1" },
    { f: 58.27, deg: 22, note: "A#1" },
    { f: 61.74, deg: 23, note: "B1" },
    { f: 65.41, deg: 24, note: "C2" },
    { f: 69.30, deg: 25, note: "C#2" },
    { f: 73.42, deg: 26, note: "D2" },
    { f: 77.78, deg: 27, note: "D#2" },
    { f: 82.41, deg: 28, note: "E2" },
    { f: 87.31, deg: 29, note: "F2" },
    { f: 92.50, deg: 30, note: "F#2" },
    { f: 98.00, deg: 31, note: "G2" },
    { f: 103.83, deg: 32, note: "G#2" },
    { f: 110.00, deg: 33, note: "A2" },
    { f: 116.54, deg: 34, note: "A#2" },
    { f: 123.47, deg: 35, note: "B2" },
    { f: 130.81, deg: 36, note: "C3" },
    { f: 138.59, deg: 37, note: "C#3" },
    { f: 146.83, deg: 38, note: "D3" },
    { f: 155.56, deg: 39, note: "D#3" },
    { f: 164.81, deg: 40, note: "E3" },
    { f: 174.61, deg: 41, note: "F3" },
    { f: 185.00, deg: 42, note: "F#3" },
    { f: 196.00, deg: 43, note: "G3" },
    { f: 207.65, deg: 44, note: "G#3" },
    { f: 220.00, deg: 45, note: "A3" },
    { f: 233.08, deg: 46, note: "A#3" },
    { f: 246.94, deg: 47, note: "B3" },
    { f: 261.63, deg: 48, note: "C4" },
    { f: 277.18, deg: 49, note: "C#4" },
    { f: 293.66, deg: 50, note: "D4" },
    { f: 311.13, deg: 51, note: "D#4" },
    { f: 329.63, deg: 52, note: "E4" },
    { f: 349.23, deg: 53, note: "F4" },
    { f: 369.99, deg: 54, note: "F#4" },
    { f: 392.00, deg: 55, note: "G4" },
    { f: 415.30, deg: 56, note: "G#4" },
    { f: 440.00, deg: 57, note: "A4" },
    { f: 466.16, deg: 58, note: "A#4" },
    { f: 493.88, deg: 59, note: "B4" },

    { f: 523.25, deg: 60, note: "C5" },
    { f: 554.37, deg: 61, note: "C#5" },
    { f: 587.33, deg: 62, note: "D5" },
    { f: 622.25, deg: 63, note: "D#5" },
    { f: 659.26, deg: 64, note: "E5" },
    { f: 698.46, deg: 65, note: "F5" },
    { f: 739.99, deg: 66, note: "F#5" },
    { f: 783.99, deg: 67, note: "G5" },
    { f: 830.61, deg: 68, note: "G#5" },
    { f: 880.00, deg: 69, note: "A5" },
    { f: 932.33, deg: 70, note: "A#5" },
    { f: 987.77, deg: 71, note: "B5" },
    { f: 1046.50, deg: 72, note: "C6" },
    { f: 1108.73, deg: 73, note: "C#6" },
    { f: 1174.66, deg: 74, note: "D6" },
    { f: 1244.51, deg: 75, note: "D#6" },
    { f: 1318.51, deg: 76, note: "E6" },
    { f: 1396.91, deg: 77, note: "F6" },
    { f: 1479.98, deg: 78, note: "F#6" },
    { f: 1567.98, deg: 79, note: "G6" },
    { f: 1661.22, deg: 80, note: "G#6" },
    { f: 1760.00, deg: 81, note: "A6" },
    { f: 1864.66, deg: 82, note: "A#6" },
    { f: 1975.53, deg: 83, note: "B6" },
    { f: 2093.00, deg: 84, note: "C7" },
    { f: 2217.46, deg: 85, note: "C#7" },
    { f: 2349.32, deg: 86, note: "D7" },
    { f: 2489.02, deg: 87, note: "D#7" },
    { f: 2637.02, deg: 88, note: "E7" },
    { f: 2793.83, deg: 89, note: "F7" },
    { f: 2959.96, deg: 90, note: "F#7" },
    { f: 3135.96, deg: 91, note: "G7" },
    { f: 3322.44, deg: 92, note: "G#7" },
    { f: 3520.00, deg: 93, note: "A7" },
    { f: 3729.31, deg: 94, note: "A#7" },
    { f: 3951.07, deg: 95, note: "B7" },
    { f: 4186.01, deg: 96, note: "C8" },
    { f: 4435.00, deg: 97, note: "C#8" },
    { f: 4698.63, deg: 98, note: "D8" },
    { f: 4978.03, deg: 99, note: "D#8" },
    { f: 5274.04, deg: 100, note: "E8" },
    { f: 5587.65, deg: 101, note: "F8" },
    { f: 5919.91, deg: 102, note: "F#8" },
    { f: 6271.93, deg: 103, note: "G8" },
    { f: 6644.88, deg: 104, note: "G#8" },
    { f: 7040.00, deg: 105, note: "A8" },
    { f: 7458.62, deg: 106, note: "A#8" },
    { f: 7902.13, deg: 107, note: "B8" },
    { f: 8372.02, deg: 108, note: "C9" },
    { f: 8869.84, deg: 109, note: "C#9" },
    { f: 9397.27, deg: 110, note: "D9" },
    { f: 9956.06, deg: 111, note: "D#9" },
    { f: 10548.08, deg: 112, note: "E9" },
    { f: 11175.30, deg: 113, note: "F9" },
    { f: 11839.9999, deg: 114, note: "F#9" },// Исправлено
    { f: 12543.85, deg: 115, note: "G9" },
    { f: 13289.75, deg: 116, note: "G#9" },
    { f: 14080.00, deg: 117, note: "A9" },
    { f: 14917.22, deg: 118, note: "A#9" },// Исправлено
    { f: 15804.26, deg: 119, note: "B9" },// Исправлено
    { f: 16744.04, deg: 120, note: "C10" }, //Исправлено
    { f: 17719.99, deg: 121, note: "C#10" }, // Исправлено
    { f: 18794.55, deg: 122, note: "D10" }, //Исправлено
    { f: 19912.13, deg: 123, note: "D#10" }, // Исправлено
    { f: 21096.16, deg: 124, note: "E10" },//Исправлено
    { f: 22350.61, deg: 125, note: "F10" }, //Исправлено
    { f: 23679.64, deg: 126, note: "F#10" }, // Исправлено
    { f: 25087.72, deg: 127, note: "G10" } //Исправлено

];

const visualizationParams = {
    animationSpeed: 0.1,
    minOpacity: 0.2,
    maxOpacity: 0.8,
    minColumnDepth: 1,
    maxColumnDepth: 260,
    maxDB: 130
};

const GRID_WIDTH = 130;
const GRID_HEIGHT = 260;
const GRID_DEPTH = 130;
const CELL_SIZE = 1;
const SPHERE_RADIUS = 5;
const INITIAL_SCALE = 1.2;
const ROTATION_LIMIT = THREE.MathUtils.degToRad(70);
const SCALE_FACTOR = 0.005;
const MAX_SCALE = 2;


// Инициализация Three.js
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(
    -window.innerWidth / 2,
    window.innerWidth / 2,
    window.innerHeight / 2,
    -window.innerHeight / 2,
    -10000,
    10000
);
camera.position.set(0, 600, 1600);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Добавляем renderer в DOM после того, как Telegram Web App загрузится
Telegram.WebApp.ready(); // Инициализация Telegram Web App
const gridContainer = document.getElementById('grid-container');
if (gridContainer) {
    gridContainer.appendChild(renderer.domElement);
} else {
    console.error("Element with id 'grid-container' not found. Cannot append renderer.");
}

// Материалы
const defaultMaterial = new THREE.LineBasicMaterial({
    color: 0xffffff,
    opacity: 0.001,
    transparent: true,
    depthWrite: false,
    depthTest: false
});
const labelMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, depthTest: false });

// Переменные
let isXRMode = false;
let videoStream = null;
let videoElement = null;
let currentCamera = 'environment';
let startOffset = 0;
let startTimestamp = 0;
let audioBufferSource = null;
let isPlaying = false;
let referenceAmplitude = 1;
let analyserLeft, analyserRight;
const columns = [];
let fileSource = null;
const audioContext = new (window.AudioContext || window.webkitAudioContext)();



// Функции для создания объектов сцены

function createSphere(color, radius) {
    const geometry = new THREE.SphereGeometry(radius * 0.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: color, depthTest: false });
    const sphere = new THREE.Mesh(geometry, material);
    return sphere;
}


function createLine(startX, startY, startZ, endX, endY, endZ, color, opacity, isLeftGrid, width, x) {
    const material = new THREE.LineBasicMaterial({
        color: color,
        opacity: opacity,
        transparent: true,
        depthTest: false
    });
    const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(startX, startY, startZ),
        new THREE.Vector3(endX, endY, endZ)
    ]);
    const line = new THREE.Line(geometry, material);
    return line;
}

const mainSequencerGroup = new THREE.Group();


function createAxisLine(start, end, color, isLeftGrid) {
    const material = new THREE.LineBasicMaterial({ color: color, depthTest: false });
    const points = [start, end];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);


    if (isLeftGrid) {
        line.geometry.attributes.position.array[0] *= -1;
        line.geometry.attributes.position.array[3] *= -1;


        line.geometry.attributes.position.needsUpdate = true;
    }
    return line;
}

function createGrid(gridWidth, gridHeight, gridDepth, cellSize, color) {
    const geometry = new THREE.BufferGeometry();
    const positions = [];


    for (let y = 0; y <= gridHeight; y += 1) {
        for (let z = 0; z <= gridDepth; z += 1) {
            positions.push(0, y * cellSize, z * cellSize, gridWidth * cellSize, y * cellSize, z * cellSize);
        }
    }
    for (let x = 0; x <= gridWidth; x += 1) {
        for (let z = 0; z <= gridDepth; z += 1) {
            positions.push(x * cellSize, 0, z * cellSize, x * cellSize, gridHeight * cellSize, z * cellSize);
        }
    }
    for (let z = 0; z <= gridWidth; z += 1) {
        for (let y = 0; y <= gridHeight; y += 1) {
            positions.push(z * cellSize, y * cellSize, 0, z * cellSize, y * cellSize, gridDepth * cellSize);
        }
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.LineBasicMaterial({
        color: color,
        opacity: 0.003,
        transparent: true,
        depthWrite: false,
        depthTest: false
    });
    return new THREE.LineSegments(geometry, material);
}

function createAxis(length, sphereRadius, xColor, yColor, zColor, isLeftGrid) {
    const axisGroup = new THREE.Group();
    const xAxisOffset = isLeftGrid ? GRID_WIDTH : 0;

    const xAxisGroup = new THREE.Group();
    axisGroup.add(xAxisGroup);

    const xAxis = createSphere(xColor, sphereRadius);
    xAxis.position.set(length, 0, 0);

    if (isLeftGrid) {
        xAxis.position.x *= -1;
    }

    xAxisGroup.add(xAxis);

    const xAxisLine = createAxisLine(new THREE.Vector3(0, 0, 0), new THREE.Vector3(length, 0, 0), xColor, isLeftGrid);
    xAxisGroup.add(xAxisLine);

    xAxisGroup.position.set(xAxisOffset, 0, 0);


    const yAxisGroup = new THREE.Group();
    axisGroup.add(yAxisGroup);

    const yAxis = createSphere(yColor, sphereRadius);
    yAxis.position.set(0, GRID_HEIGHT, 0);

    yAxisGroup.add(yAxis);


    const yAxisLine = createAxisLine(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, GRID_HEIGHT, 0), yColor, isLeftGrid);
    yAxisGroup.add(yAxisLine);

    yAxisGroup.position.set(xAxisOffset, 0, 0);


    const zAxisGroup = new THREE.Group();
    axisGroup.add(zAxisGroup);

    const zAxis = createSphere(zColor, sphereRadius);
    zAxis.position.set(0, 0, length);

    zAxisGroup.add(zAxis);


    const zAxisLine = createAxisLine(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, length), zColor, isLeftGrid);
    zAxisGroup.add(zAxisLine);


    zAxisGroup.position.set(xAxisOffset, 0, 0);


    return axisGroup;
}



function createSequencerGrid(width, height, depth, cellSize, color, position, isLeftGrid) {
    const grid = createGrid(width, height, depth, cellSize, color);
    const axis = createAxis(width, SPHERE_RADIUS, isLeftGrid ? 0x0000FF : 0xFF0000, 0x00FF00, 0xFFFFFF, isLeftGrid);
    const sequencerGroup = new THREE.Group();


    sequencerGroup.add(grid);
    sequencerGroup.add(axis);

    sequencerGroup.position.copy(position);


    return sequencerGroup;
}




const leftSequencerGroup = createSequencerGrid(GRID_WIDTH, GRID_HEIGHT, GRID_DEPTH, CELL_SIZE, 0x0000FF, new THREE.Vector3(-GRID_WIDTH / 2 - 65, -GRID_HEIGHT / 2, -GRID_DEPTH / 2), true);
const rightSequencerGroup = createSequencerGrid(GRID_WIDTH, GRID_HEIGHT, GRID_DEPTH, CELL_SIZE, 0xFF0000, new THREE.Vector3(GRID_WIDTH / 2 + 65, -GRID_HEIGHT / 2, -GRID_DEPTH / 2), false);

mainSequencerGroup.add(leftSequencerGroup);
mainSequencerGroup.add(rightSequencerGroup);
mainSequencerGroup.scale.set(INITIAL_SCALE, INITIAL_SCALE, INITIAL_SCALE);
scene.add(mainSequencerGroup);


function initializeColumns() {
    if (columns.length === 0) {

        for (let i = 0; i < semitones.length; i++) {

            const initialDB = 0;
            const maxOffset = degreesToCells(semitones[i].deg);
            const offsetLeft = i;
            const columnLeft = createColumn(offsetLeft, i + 1, initialDB, true);
            const columnRight = createColumn(0, i + 1, initialDB, false);


            columns.push({
                left: columnLeft,
                right: columnRight,
                offsetX: 0,
                direction: 1,
                maxOffset: maxOffset,
                speed: Math.random() * visualizationParams.animationSpeed + 0.1,
                dB: initialDB,
                dBDirection: 1
            });
        }
    }
    columns.forEach(column => {

        if (!column.left.parent) {
            leftSequencerGroup.add(column.left);
        }
        if (!column.right.parent) {
            rightSequencerGroup.add(column.right);
        }
    });
}


function getSemitoneLevels(analyser) {
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);

    const sampleRate = audioContext.sampleRate;
    const binSize = sampleRate / (2 * bufferLength);

    return semitones.map(semitone => {
        const binIndex = Math.round(semitone.f / binSize);


        if (binIndex >= bufferLength) {
            return -100;
        }

        const amplitude = dataArray[binIndex];

        if (amplitude === 0) {
            return -100;
        }


        const dB = 20 * Math.log10(amplitude / 255) * 1.5;



        return THREE.MathUtils.clamp(dB, -100, 30);
    });
}



function updateSequencerColumns(amplitudes, channel) {

    columns.forEach((column, i) => {

        const dB = amplitudes[i];



        if (isNaN(dB)) {

            return;
        }

        const normalizedDB = THREE.MathUtils.clamp((dB + 100) / (visualizationParams.maxDB + 100), 0, 1);


        const channelGroup = channel === 'left' ? column.left : column.right;




        channelGroup.position.z = -GRID_DEPTH / 2;





        const { opacity, color } = calculateOpacityAndColor(dB, i);

        channelGroup.children.forEach(line => {
            line.material.opacity = opacity;
            line.material.color = color;



            const depth = Math.max(visualizationParams.minColumnDepth, normalizedDB * visualizationParams.maxColumnDepth);




            line.scale.z = depth;

        });
    });
}



function setupAudioProcessing(source) {
    const splitter = audioContext.createChannelSplitter(2);
    analyserLeft = audioContext.createAnalyser();
    analyserRight = audioContext.createAnalyser();



    analyserLeft.fftSize = 4096;
    analyserRight.fftSize = 4096;
    analyserLeft.smoothingTimeConstant = 0.3;
    analyserRight.smoothingTimeConstant = 0.3;


    source.connect(splitter);
    splitter.connect(analyserLeft, 0);
    splitter.connect(analyserRight, 1);

    let animationFrameId;

    function processAudio() {
        if (isPlaying) {
            const semitoneAmplitudesLeft = getSemitoneLevels(analyserLeft);
            const semitoneAmplitudesRight = getSemitoneLevels(analyserRight);



            updateSequencerColumns(semitoneAmplitudesLeft, 'left');
            updateSequencerColumns(semitoneAmplitudesRight, 'right');


            animationFrameId = requestAnimationFrame(processAudio);
        } else if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);

        }
    }


    processAudio();
}



function calculateOpacityAndColor(dB, index) {
    const hue = THREE.MathUtils.lerp(0, 270, index / (semitones.length - 1));
    const saturation = 100;

    const lightness = 50 + (dB / GRID_HEIGHT) * 50;


    const color = new THREE.Color().setHSL(hue / 360, saturation / 100, lightness / 100);



    const opacity = visualizationParams.minOpacity + (visualizationParams.maxOpacity - visualizationParams.minOpacity) * (dB / GRID_HEIGHT);



    return { opacity, color };
}

function degreesToCells(degrees) {
    const maxWidth = 130;
    const minWidth = 1;
    const totalSemitones = semitones.length;
    const width = maxWidth - ((degrees / (totalSemitones - 1)) * (maxWidth - minWidth));
    return Math.max(minWidth, Math.round(width));
}



function createColumn(x, y, dB, isLeftGrid) {
    const { opacity, color: lineColor } = calculateOpacityAndColor(dB, y - 1);
    const semitone = semitones[y - 1];
    const width = degreesToCells(semitone.deg);


    const startX = isLeftGrid ? (-GRID_WIDTH / 2) + x + 65 : x;

    const columnGroup = new THREE.Group();
    columnGroup.dB = dB;



    columnGroup.position.z = -GRID_DEPTH / 2;

    const lines = [


        createLine(startX, y * 2, 0, startX + width, y * 2, 0, lineColor, opacity, isLeftGrid, width, x),

        createLine(startX, (y + 1) * 2, 0, startX + width, (y + 1) * 2, 0, lineColor, opacity, isLeftGrid, width, x),
        createLine(startX, y * 2, 0, startX, (y + 1) * 2, 0, lineColor, opacity, isLeftGrid, width, x),

        createLine(startX + width, y * 2, 0, startX + width, (y + 1) * 2, 0, lineColor, opacity, isLeftGrid, width, x),



        createLine(startX, y * 2, 1, startX + width, y * 2, 1, lineColor, opacity, isLeftGrid, width, x),

        createLine(startX, (y + 1) * 2, 1, startX + width, (y + 1) * 2, 1, lineColor, opacity, isLeftGrid, width, x),
        createLine(startX, y * 2, 1, startX, (y + 1) * 2, 1, lineColor, opacity, isLeftGrid, width, x),
        createLine(startX + width, y * 2, 1, startX + width, (y + 1) * 2, 1, lineColor, opacity, isLeftGrid, width, x),




        createLine(startX, y * 2, 0, startX, y * 2, 1, lineColor, opacity, isLeftGrid, width, x),
        createLine(startX + width, y * 2, 0, startX + width, y * 2, 1, lineColor, opacity, isLeftGrid, width, x),
        createLine(startX, (y + 1) * 2, 0, startX, (y + 1) * 2, 1, lineColor, opacity, isLeftGrid, width, x),

        createLine(startX + width, (y + 1) * 2, 0, startX + width, (y + 1) * 2, 1, lineColor, opacity, isLeftGrid, width, x)
    ];

    lines.forEach(line => {

        columnGroup.add(line);



        line.scale.z = visualizationParams.minColumnDepth;


    });


    return columnGroup;
}

initializeColumns();


// Блок 2: Обработчики событий и функции работы со звуком

let fileInput = null;
let playPauseButton = null;
const startButton = document.getElementById('micButton');
let microphoneStream = null;
let isRecording = false;

// Функция для обработки загрузки аудиофайла
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                fileSource = await audioContext.decodeAudioData(e.target.result);
                if (playPauseButton) {
                    playPauseButton.disabled = false;
                } else {
                    console.warn("playPauseButton element not found. Cannot enable button.");
                }
                startOffset = 0;
            } catch (err) {
                console.error("Error decoding audio data", err);
            }
        };
        reader.readAsArrayBuffer(file);
    }
}

// Функция для запуска/остановки воспроизведения звука
function playPauseAudio() {
    if (!fileSource) return;

    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');

    if (!isPlaying) {
        audioBufferSource = audioContext.createBufferSource();
        audioBufferSource.buffer = fileSource;
        setupAudioProcessing(audioBufferSource);
        audioBufferSource.connect(audioContext.destination);
        audioBufferSource.start(0, startOffset % fileSource.duration);
        startTimestamp = audioContext.currentTime - startOffset;
        isPlaying = true;

        if (playIcon && pauseIcon) {
            playIcon.classList.add('icon-hidden');
            pauseIcon.classList.remove('icon-hidden');
        } else {
            console.warn("Play/pause icons not found. Cannot toggle icons.");
        }
    } else {
        if (audioBufferSource) {
            audioBufferSource.stop();
            audioBufferSource.disconnect();
            audioBufferSource = null;
            startOffset = audioContext.currentTime - startTimestamp;
            isPlaying = false;

            if (playIcon && pauseIcon) {
                playIcon.classList.remove('icon-hidden');
                pauseIcon.classList.add('icon-hidden');
            } else {
                console.warn("Play/pause icons not found. Cannot toggle icons.");
            }
        }
    }
}

function toggleMicrophone() {
    if (!isRecording) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                microphoneStream = stream;
                const source = audioContext.createMediaStreamSource(stream);
                setupAudioProcessing(source);
                isRecording = true;

                const micButton = document.getElementById('micButton');
                if (micButton) {
                    micButton.textContent = "Stop";
                } else {
                    console.warn("micButton not found. Cannot update text");
                }

                const micCrossLine = document.getElementById('micCrossLine');
                if (micCrossLine) {
                    micCrossLine.style.display = 'none';
                } else {
                    console.warn("micCrossLine element not found. Cannot hide line.");
                }
            })
            .catch(err => {
                console.error("Error accessing microphone:", err);
                isRecording = false;
            });
    } else {
        if (microphoneStream) {
            microphoneStream.getTracks().forEach(track => track.stop());
            microphoneStream = null;
        }
        isRecording = false;


        const micButton = document.getElementById('micButton');
        if (micButton) {
            micButton.textContent = "Start";
        } else {
            console.warn("micButton not found. Cannot update button");
        }


        const micCrossLine = document.getElementById('micCrossLine');

        if (micCrossLine) {

            micCrossLine.style.display = '';

        } else {
            console.warn("micCrossLine element not found. Cannot show line.");
        }





        if (audioContext && audioBufferSource) {
            audioBufferSource.disconnect();
            if (analyserLeft) analyserLeft.disconnect();
            if (analyserRight) analyserRight.disconnect();
        }
    }
}

// Функция для вычисления амплитуд полутонов
function calculateSemitoneAmplitudes(dataArray) {
    const amplitudes = [];

    for (let i = 0; i < semitones.length; i++) {

        const semitone = semitones[i];

        const freq = semitone.f;


        const index = Math.floor(freq / (audioContext.sampleRate / 2) * dataArray.length);


        const amplitude = index >= 0 && index < dataArray.length ? dataArray[index] : 0;



        const dB = 20 * Math.log10(amplitude / referenceAmplitude);


        amplitudes.push(dB);
    }
    return amplitudes;
}


function updateColumns(amplitudes, channel) {
    columns.forEach((column, i) => {

        const dB = amplitudes[i];
        if (isNaN(dB) || dB < -100) {
            return;
        }
        let height = Math.max(visualizationParams.minColumnDepth, visualizationParams.minColumnDepth + dB / 10);
        height = Math.min(height, visualizationParams.maxColumnDepth);
        const channelGroup = channel === 'left' ? column.left : column.right;


        if (channelGroup) {
            const { opacity, color } = calculateOpacityAndColor(dB, i);
            channelGroup.children.forEach(line => {
               if (line.material) {
                  line.material.opacity = opacity;
                  line.material.color = color;

               }

            });



            channelGroup.scale.z = height;



           channelGroup.position.z = (-GRID_DEPTH/2) + (channelGroup.scale.z/2);




        }



    });
}

document.addEventListener('DOMContentLoaded', () => {

    fileInput = document.getElementById('fileInput');

    if (fileInput) {
        fileInput.addEventListener('change', handleFileSelect);
    } else {
        console.warn("fileInput element not found. Audio upload will not work.");
    }

    playPauseButton = document.getElementById('playPauseButton');
    if (playPauseButton) {
        playPauseButton.addEventListener('click', playPauseAudio);
    } else {
        console.warn("playPauseButton element not found. Play/pause will not work.");
    }


    if (startButton) {

        startButton.addEventListener('click', toggleMicrophone);

    } else {
       console.warn("startButton element not found. Mic toggle will not work.");
    }
});



// Блок 3: Функции анимации, взаимодействия и управления камерой

function calculateSemitoneAmplitudes(dataArray) {
    const amplitudes = [];
    for (let i = 0; i < semitones.length; i++) {
        const semitone = semitones[i];
        const freq = semitone.f;
        const index = Math.floor(freq / (audioContext.sampleRate / 2) * dataArray.length);
        const amplitude = index >= 0 && index < dataArray.length ? dataArray[index] : 0;
        const dB = 20 * Math.log10(amplitude / referenceAmplitude);
        amplitudes.push(dB);
    }

    return amplitudes;
}


function updateColumns(amplitudes, channel) {

    columns.forEach((column, i) => {
        const dB = amplitudes[i];
        if (isNaN(dB) || dB < -100) {
            return;
        }


        let height = Math.max(visualizationParams.minColumnDepth, visualizationParams.minColumnDepth + dB / 10);

        height = Math.min(height, visualizationParams.maxColumnDepth);
        const channelGroup = channel === 'left' ? column.left : column.right;

        if (channelGroup) {
            const { opacity, color } = calculateOpacityAndColor(dB, i);
            channelGroup.children.forEach(line => {
                if(line.material){
                   line.material.opacity = opacity;
                   line.material.color = color;
                }
            });


            channelGroup.scale.z = height;




            channelGroup.position.z = (-GRID_DEPTH/2) + (channelGroup.scale.z/2);
        }
    });
}

const hammer = new Hammer(renderer.domElement);
hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });

let currentRotationX = 0;
let currentRotationY = 0;

hammer.on('pan', (ev) => {
    const deltaX = ev.deltaX * 0.01;
    const deltaY = ev.deltaY * 0.01;

    let newRotationY = currentRotationY + deltaX;
    let newRotationX = currentRotationX + deltaY;


    if (deltaY > 0) {

        newRotationX = Math.min(newRotationX, ROTATION_LIMIT);

    } else {
        newRotationX = Math.max(newRotationX, -ROTATION_LIMIT);

    }



    newRotationY = THREE.MathUtils.clamp(newRotationY, -ROTATION_LIMIT, ROTATION_LIMIT);
    newRotationX = THREE.MathUtils.clamp(newRotationX, -ROTATION_LIMIT, ROTATION_LIMIT);


    mainSequencerGroup.rotation.y = newRotationY;
    mainSequencerGroup.rotation.x = newRotationX;
});

hammer.on('panend', () => {
    currentRotationX = mainSequencerGroup.rotation.x;
    currentRotationY = mainSequencerGroup.rotation.y;

});

mainSequencerGroup.position.set(0, 0, 0);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);


    if(isPlaying && fileSource) {
       updatePlayhead();
    }
}

animate();

const fullscreenButton = document.getElementById('fullscreenButton');

if (fullscreenButton) {
    fullscreenButton.addEventListener('click', () => {
        if (!document.fullscreenElement) {

            document.documentElement.requestFullscreen();

        } else {

            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }


    });

}


const xrButton = document.getElementById('xrButton');
const toggleCameraButton = document.getElementById('toggleCameraButton');


let currentStream = null;
let useFrontCamera = true;
let cameraView = null;


if (xrButton) {

    xrButton.addEventListener('click', async () => {



        if (currentStream) {

            stopStream();



            if (toggleCameraButton) {
                 toggleCameraButton.style.display = 'none';

            }


             if(cameraView) {
               cameraView.style.display = 'none';
             }


            xrButton.children[0].style.fill = 'var(--button-color)';
        } else {

            try {
                 currentCamera = useFrontCamera ? "user" : "environment";
                const constraints = {
                    video: { facingMode: currentCamera },
                    audio: false
                };
                currentStream = await navigator.mediaDevices.getUserMedia(constraints);



                if (!cameraView) {
                  cameraView = document.getElementById('camera-view'); // Инициализируем cameraView, если она не была инициализирована ранее.
                }

                cameraView.srcObject = currentStream;



                cameraView.style.display = 'block';


                xrButton.children[0].style.fill = '#FFFFFF';

                 if (toggleCameraButton) {
                    toggleCameraButton.style.display = 'flex';
                 }



                 setupHandpose(currentStream).catch(error => {
                    console.error('Ошибка инициализации Handpose:', error);
                 });


            } catch (err) {
               console.error('Error accessing camera:', err);

            }
        }


    });
}

if (toggleCameraButton) {

    toggleCameraButton.addEventListener('click', async () => {
        if (currentStream) {
            useFrontCamera = !useFrontCamera;
            stopStream();

            try {

                currentCamera = useFrontCamera ? "user" : "environment";


                const constraints = {

                    video: { facingMode: currentCamera },

                    audio: false
                };
                currentStream = await navigator.mediaDevices.getUserMedia(constraints);

                cameraView.srcObject = currentStream;


                await setupHandpose(currentStream);


            } catch (err) {
                console.error('Error switching camera:', err);
            }


        }

    });


}





function stopStream() {
    if (currentStream) {

        currentStream.getTracks().forEach(track => track.stop());
        currentStream = null;
    }
     if (cameraView) {
         cameraView.srcObject = null;
     }


}


// Блок 4: Функции timeline, Handpose, обработка resize и вспомогательные функции

const timelineContainer = document.getElementById('timeline-container');
const timelineCanvas = document.getElementById('timeline-canvas');
const playhead = document.getElementById('playhead');
let ctx = null;



if (timelineCanvas) {
   ctx = timelineCanvas.getContext('2d');
}


let timelineWidth = timelineContainer ? timelineCanvas.width = timelineContainer.clientWidth : 0;
let timelineHeight = timelineContainer ? timelineCanvas.height = timelineContainer.clientHeight : 0;
let recordedGestures = [];


// Функция для отрисовки timeline
function drawTimeline() {

    if (!ctx || !timelineCanvas || !timelineContainer ) return;

    ctx.clearRect(0, 0, timelineWidth, timelineHeight);

    if (recordedGestures.length > 0) {
        ctx.strokeStyle = '#fff';

        ctx.lineWidth = 2;

        ctx.beginPath();

        for (let i = 0; i < recordedGestures.length; i++) {
            const frame = recordedGestures[i];

            const x = (i / recordedGestures.length) * timelineWidth;
            // Используем videoHeight из cameraView, если она доступна, иначе берем среднюю высоту
            const y = frame.fingertips && cameraView && cameraView.videoHeight
                ? (frame.fingertips[0].y / cameraView.videoHeight) * timelineHeight
                : timelineHeight / 2;


            if (i === 0) {
                ctx.moveTo(x, y);

            } else {
                ctx.lineTo(x, y);

            }
        }

        ctx.stroke();

    }

}




// Функция для настройки Handpose

async function setupHandpose(videoStream) {
    if(!videoStream || !cameraView) return;


        const handposeModel = await handpose.load();

        setInterval(async () => {

            if (videoStream && isRecording && isPlaying && currentCamera === 'environment') {

                const predictions = await handposeModel.estimateHands(cameraView);

                if (predictions.length > 0) {

                    const fingertips = predictions[0].landmarks.slice(8, 20, 4);


                    const frameData = {

                        timestamp: Date.now(),

                        fingertips: fingertips.map(point => ({ x: point[0], y: point[1], z: point[2] }))
                    };

                    recordedGestures.push(frameData);



                    drawTimeline();


                }

            }

        }, 50);


}


// Функция для обновления позиции playhead
function updatePlayhead() {
    if (!fileSource || !timelineWidth || !playhead) return;

    const duration = fileSource.duration;
    const playheadPosition = ((audioContext.currentTime - startTimestamp) / duration) * timelineWidth;
    playhead.style.left = playheadPosition + 'px';
}




function saveGesture(name) {
    if (recordedGestures.length > 0) {


        try {


            localStorage.setItem(name, JSON.stringify(recordedGestures));


        } catch (error) {


            console.error('Error saving gesture to local storage:', error);

        }
    }
}



function loadGesture(name) {
    try {
        const loadedGestures = localStorage.getItem(name);



        if (loadedGestures) {
            recordedGestures = JSON.parse(loadedGestures);
            drawTimeline();

        }

    } catch (error) {


        console.error('Error loading gesture from local storage:', error);

    }



}




window.addEventListener('resize', () => {
    camera.left = -window.innerWidth / 2;
    camera.right = window.innerWidth / 2;
    camera.top = window.innerHeight / 2;

    camera.bottom = -window.innerHeight / 2;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    updateSequencerScale();


    if (timelineContainer && timelineCanvas) {


        timelineWidth = timelineCanvas.width = timelineContainer.clientWidth;

        timelineHeight = timelineCanvas.height = timelineContainer.clientHeight;


        drawTimeline();
    }

});



function updateSequencerScale() {

    const scale = Math.min(window.innerWidth, window.innerHeight) / 400;
    mainSequencerGroup.scale.set(scale * INITIAL_SCALE, scale * INITIAL_SCALE, scale * INITIAL_SCALE);

    mainSequencerGroup.position.set(0, 0, 0);

}


updateSequencerScale();
drawTimeline();