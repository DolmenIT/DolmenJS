djs.wm.set('v_test_1');

djs.wm.add("elBackground", djs.ob.image(null, {
    p_x: djs.di.rw(50), p_y: 0, p_w: djs.di.rw(100), p_h: djs.di.rh(100), p_z: 0,
    p_file: "images/1.jpg",
    p_opacity: 0.75
}));

djs.ev.delay({ p_delay: 2250,
    on_delay: { p_object: djs.ac.goto, p_instance: null, p_var_struct: { p_object: 'views/v_test_2.js', p_destruct: 'v_test_1' } }
});