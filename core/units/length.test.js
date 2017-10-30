const tf = require('./../test-function')

test('1 km to km = 1', () => { expect(tf('1 km to km')).toBe(1) })
test('1 km to m = 1000', () => { expect(tf('1 km to m')).toBe(1000) })
test('1 km to cm = 100000', () => { expect(tf('1 km to cm')).toBe(100000) })
test('1 km to mm = 1000000', () => { expect(tf('1 km to mm')).toBe(1000000) })
test('1 km to μm = 1000000000', () => { expect(tf('1 km to μm')).toBe(1000000000) })
test('1 km to nm = 1000000000000', () => { expect(tf('1 km to nm')).toBe(1000000000000) })
test('1 km to mi = 0.621371', () => { expect(tf('1 km to mi')).toBe(0.621371) })
test('1 km to yd = 1093.61', () => { expect(tf('1 km to yd')).toBe(1093.61) })
test('1 km to ft = 3280.84', () => { expect(tf('1 km to ft')).toBe(3280.84) })
test('1 km to in = 39370.10', () => { expect(tf('1 km to in')).toBe(39370.10) })

test('1 m to km = 0.001', () => { expect(tf('1 m to km')).toBe(0.001) })
test('1 m to m = 1', () => { expect(tf('1 m to m')).toBe(1) })
test('1 m to cm = 100', () => { expect(tf('1 m to cm')).toBe(100) })
test('1 m to mm = 1000', () => { expect(tf('1 m to mm')).toBe(1000) })
test('1 m to μm = 1000000', () => { expect(tf('1 m to μm')).toBe(1000000) })
test('1 m to nm = 1000000000', () => { expect(tf('1 m to nm')).toBe(1000000000) })
test('1 m to mi = 0.000621371', () => { expect(tf('1 m to mi')).toBe(0.000621371) })
test('1 m to yd = 1.09361', () => { expect(tf('1 m to yd')).toBe(1.09361) })
test('1 m to ft = 3.28084', () => { expect(tf('1 m to ft')).toBe(3.28084) })
test('1 m to in = 39.3701', () => { expect(tf('1 m to in')).toBe(39.3701) })

test('1 cm to km = 0.00001', () => { expect(tf('1 cm to km')).toBe(0.00001) })
test('1 cm to m = 0.01', () => { expect(tf('1 cm to m')).toBe(0.01) })
test('1 cm to cm = 1', () => { expect(tf('1 cm to cm')).toBe(1) })
test('1 cm to mm = 10', () => { expect(tf('1 cm to mm')).toBe(10) })
test('1 cm to μm = 10000', () => { expect(tf('1 cm to μm')).toBe(10000) })
test('1 cm to nm = 10000000', () => { expect(tf('1 cm to nm')).toBe(10000000) })
test('1 cm to mi = 0.00000621371', () => { expect(tf('1 cm to mi')).toBe(0.00000621371) })
test('1 cm to yd = 0.0109361', () => { expect(tf('1 cm to yd')).toBe(0.0109361) })
test('1 cm to ft = 0.0328084', () => { expect(tf('1 cm to ft')).toBe(0.0328084) })
test('1 cm to in = 0.393701', () => { expect(tf('1 cm to in')).toBe(0.393701) })

test('1 mm to km = 0.000001', () => { expect(tf('1 mm to km')).toBe(0.000001) })
test('1 mm to m = 0.001', () => { expect(tf('1 mm to m')).toBe(0.001) })
test('1 mm to cm = 0.1', () => { expect(tf('1 mm to cm')).toBe(0.1) })
test('1 mm to mm = 1', () => { expect(tf('1 mm to mm')).toBe(1) })
test('1 mm to μm = 1000', () => { expect(tf('1 mm to μm')).toBe(1000) })
test('1 mm to nm = 1000000', () => { expect(tf('1 mm to nm')).toBe(1000000) })
test('1 mm to mi = 6.21371e-7', () => { expect(tf('1 mm to mi')).toBe(6.21371e-7) })
test('1 mm to yd = 0.00109361', () => { expect(tf('1 mm to yd')).toBe(0.00109361) })
test('1 mm to ft = 0.00328084', () => { expect(tf('1 mm to ft')).toBe(0.00328084) })
test('1 mm to in = 0.0393701', () => { expect(tf('1 mm to in')).toBe(0.0393701) })

test('1 μm to km = 1e-9', () => { expect(tf('1 μm to km')).toBe(1e-9) })
test('1 μm to m = 0.000001', () => { expect(tf('1 μm to m')).toBe(0.000001) })
test('1 μm to cm = 0.0001', () => { expect(tf('1 μm to cm')).toBe(0.0001) })
test('1 μm to mm = 0.001', () => { expect(tf('1 μm to mm')).toBe(0.001) })
test('1 μm to μm = 1', () => { expect(tf('1 μm to μm')).toBe(1) })
test('1 μm to nm = 1000', () => { expect(tf('1 μm to nm')).toBe(1000) })
test('1 μm to mi = 6.21371e-10', () => { expect(tf('1 μm to mi')).toBe(6.21371e-10) })
test('1 μm to yd = 0.00000109361', () => { expect(tf('1 μm to yd')).toBe(0.00000109361) })
test('1 μm to ft = 0.00000328084', () => { expect(tf('1 μm to ft')).toBe(0.00000328084) })
test('1 μm to in = 0.0000393701', () => { expect(tf('1 μm to in')).toBe(0.0000393701) })

test('1 nm to km = 1e-12', () => { expect(tf('1 nm to km')).toBe(1e-12) })
test('1 nm to m = 1e-9', () => { expect(tf('1 nm to m')).toBe(1e-9) })
test('1 nm to cm = 1e-7', () => { expect(tf('1 nm to cm')).toBe(1e-7) })
test('1 nm to mm = 0.000001', () => { expect(tf('1 nm to mm')).toBe(0.000001) })
test('1 nm to μm = 0.001', () => { expect(tf('1 nm to μm')).toBe(0.001) })
test('1 nm to nm = 1', () => { expect(tf('1 nm to nm')).toBe(1) })
test('1 nm to mi = 6.21371e-13', () => { expect(tf('1 nm to mi')).toBe(6.21371e-13) })
test('1 nm to yd = 1.09361e-9', () => { expect(tf('1 nm to yd')).toBe(1.09361e-9) })
test('1 nm to ft = 3.28084e-9', () => { expect(tf('1 nm to ft')).toBe(3.28084e-9) })
test('1 nm to in = 3.93701e-8', () => { expect(tf('1 nm to in')).toBe(3.93701e-8) })

test('1 mi to km = 1.60934', () => { expect(tf('1 mi to km')).toBe(1.60934) })
test('1 mi to m = 1609.34', () => { expect(tf('1 mi to m')).toBe(1609.34) })
test('1 mi to cm = 160934', () => { expect(tf('1 mi to cm')).toBe(160934) })
test('1 mi to mm = 1609340', () => { expect(tf('1 mi to mm')).toBe(1609340) })
test('1 mi to μm = 1609340000', () => { expect(tf('1 mi to μm')).toBe(1609340000) })
test('1 mi to nm = 1609340000000', () => { expect(tf('1 mi to nm')).toBe(1609340000000) })
test('1 mi to mi = 1', () => { expect(tf('1 mi to mi')).toBe(1) })
test('1 mi to yd = 1760', () => { expect(tf('1 mi to yd')).toBe(1760) })
test('1 mi to ft = 5280', () => { expect(tf('1 mi to ft')).toBe(5280) })
test('1 mi to in = 63360', () => { expect(tf('1 mi to in')).toBe(63360) })

test('1 yd to km = 0.0009144', () => { expect(tf('1 yd to km')).toBe(0.0009144) })
test('1 yd to m = 0.9144', () => { expect(tf('1 yd to m')).toBe(0.9144) })
test('1 yd to cm = 91.44', () => { expect(tf('1 yd to cm')).toBe(91.44) })
test('1 yd to mm = 914.4', () => { expect(tf('1 yd to mm')).toBe(914.4) })
test('1 yd to μm = 914400', () => { expect(tf('1 yd to μm')).toBe(914400) })
test('1 yd to nm = 914400000', () => { expect(tf('1 yd to nm')).toBe(914400000) })
test('1 yd to mi = 0.000568182', () => { expect(tf('1 yd to mi')).toBe(0.000568182) })
test('1 yd to yd = 1', () => { expect(tf('1 yd to yd')).toBe(1) })
test('1 yd to ft = 3', () => { expect(tf('1 yd to ft')).toBe(3) })
test('1 yd to in = 36', () => { expect(tf('1 yd to in')).toBe(36) })

test('1 ft to km = 0.0003048', () => { expect(tf('1 ft to km')).toBe(0.0003048) })
test('1 ft to m = 0.3048', () => { expect(tf('1 ft to m')).toBe(0.3048) })
test('1 ft to cm = 30.48', () => { expect(tf('1 ft to cm')).toBe(30.48) })
test('1 ft to mm = 304.8', () => { expect(tf('1 ft to mm')).toBe(304.8) })
test('1 ft to μm = 304800', () => { expect(tf('1 ft to μm')).toBe(304800) })
test('1 ft to nm = 304800000', () => { expect(tf('1 ft to nm')).toBe(304800000) })
test('1 ft to mi = 0.000189394', () => { expect(tf('1 ft to mi')).toBe(0.000189394) })
test('1 ft to yd = 0.333333', () => { expect(tf('1 ft to yd')).toBe(0.333333) })
test('1 ft to ft = 1', () => { expect(tf('1 ft to ft')).toBe(1) })
test('1 ft to in = 12', () => { expect(tf('1 ft to in')).toBe(12) })

test('1 in to km = 0.0000254', () => { expect(tf('1 in to km')).toBe(0.0000254) })
test('1 in to m = 0.0254', () => { expect(tf('1 in to m')).toBe(0.0254) })
test('1 in to cm = 2.54', () => { expect(tf('1 in to cm')).toBe(2.54) })
test('1 in to mm = 25.4', () => { expect(tf('1 in to mm')).toBe(25.4) })
test('1 in to μm = 25400', () => { expect(tf('1 in to μm')).toBe(25400) })
test('1 in to nm = 25400000', () => { expect(tf('1 in to nm')).toBe(25400000) })
test('1 in to mi = 0.0000157828', () => { expect(tf('1 in to mi')).toBe(0.0000157828) })
test('1 in to yd = 0.0277778', () => { expect(tf('1 in to yd')).toBe(0.0277778) })
test('1 in to ft = 0.0833333', () => { expect(tf('1 in to ft')).toBe(0.0833333) })
test('1 in to in = 1', () => { expect(tf('1 in to in')).toBe(1) })
